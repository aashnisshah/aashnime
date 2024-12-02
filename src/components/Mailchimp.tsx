"use client";

import { useState } from 'react';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import { Button, Flex, Heading, Input, Text, Background } from '@/once-ui/components';
import { mailchimp } from '@/app/resources';

// Debounce utility function
function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeout: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    }) as T;
}

type NewsletterProps = {
    display: boolean;
    title: string | JSX.Element;
    description: string | JSX.Element;
}

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [touched, setTouched] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<string>('');

    const t = useTranslations();

    const validateEmail = (email: string): boolean => {
        if (email === '') return true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (!validateEmail(value)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
        }
    };

    const debouncedHandleChange = debounce(handleChange, 2000);

    const handleBlur = () => {
        setTouched(true);
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset previous states
        setIsSubmitting(true);
        setError('');
        setSubmitStatus('');

        // Validate email
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            setIsSubmitting(false);
            return;
        }

        try {
            // Replace with your actual MailerLite API details
            const response = await axios.post(
                'https://connect.mailerlite.com/api/subscribers',
                {
                    email: email,
                    groups: [process.env.NEXT_PUBLIC_MAILERLITE_GROUP_ID || '']
                },
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            // Success
            setSubmitStatus('Successfully subscribed!');
            setEmail(''); // Clear input
        } catch (err: any) {
            // Handle potential errors
            console.error('Subscription error:', err);
            const errorMessage = err.response?.data?.message || 'Subscription failed. Please try again.';
            setError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Flex
            style={{ overflow: 'hidden' }}
            position="relative"
            fillWidth
            padding="xl"
            radius="l"
            marginBottom="m"
            direction="column"
            alignItems="center"
            align="center"
            background="surface"
            border="neutral-medium"
            borderStyle="solid-1"
        >
            <Background
                position="absolute"
                mask={mailchimp.effects.mask as any}
                gradient={mailchimp.effects.gradient as any}
                dots={mailchimp.effects.dots as any}
                lines={mailchimp.effects.lines as any}
            />
            <Heading
                style={{ position: 'relative' }}
                marginBottom="s"
                variant="display-strong-xs"
            >
                {newsletter.title}
            </Heading>
            <Text
                style={{
                    position: 'relative',
                    maxWidth: 'var(--responsive-width-xs)'
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium"
            >
                {newsletter.description}
            </Text>
            <form
                onSubmit={handleSubmit}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Flex
                    id="newsletter-signup"
                    fillWidth
                    maxWidth={24}
                    gap="8"
                >
                    <Input
                        formNoValidate
                        labelAsPlaceholder
                        id="newsletter-email"
                        name="EMAIL"
                        type="email"
                        label="Email"
                        required
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            // Explicitly call handleChange with the event
                            handleChange(e);
                        }}
                        onBlur={handleBlur}
                        error={error}
                    />

                    <div className="clear">
                        <Flex
                            height="48"
                            alignItems="center"
                        >
                            <Button
                                type="submit"
                                size="m"
                                fillWidth
                                disabled={isSubmitting || !!error}
                            >
                                {isSubmitting ? 'Subscribing...' : t("newsletter.button")}
                            </Button>
                        </Flex>
                    </div>

                    {/* Error or Success Message */}
                    {(error || submitStatus) && (
                        <div
                            style={{
                                color: error ? 'red' : 'green',
                                marginTop: '8px',
                                textAlign: 'center'
                            }}
                        >
                            {error || submitStatus}
                        </div>
                    )}
                </Flex>
            </form>
        </Flex>
    );
};