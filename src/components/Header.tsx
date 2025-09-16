"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Flex, ToggleButton, DropdownWrapper, DropdownOptions, Icon } from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes, display } from '@/app/resources'

import { routing } from '@/i18n/routing';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { renderContent } from "@/app/resources";
import { useTranslations } from "next-intl";
import { i18n } from "@/app/resources/config";

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <>
            {currentTime}
        </>
    );
};

export default TimeDisplay;

export const Header = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname() ?? '';
    const params = useParams();

    function handleLanguageChange(locale: string) {
        const nextLocale = locale as Locale;
        startTransition(() => {
            router.replace(
                pathname,
                { locale: nextLocale }
            )
        })
    }

    const t = useTranslations();
    const { person, home, about, blog, work, gallery, testimonials, contact, ctoServices, speaking, advisory } = renderContent(t);

    // Services dropdown options
    const servicesOptions: DropdownOptions[] = [
        {
            label: ctoServices.label,
            value: 'cto-services',
            hasPrefix: (<Icon name="compass" onBackground="neutral-strong" size="m" />),
            description: 'Fractional CTO Services'
        },
        {
            label: advisory.label,
            value: 'advisory',
            hasPrefix: (<Icon name="compass" onBackground="neutral-strong" size="m" />),
            description: 'Advisory & Board Engagements'
        },
        {
            label: speaking.label,
            value: 'speaking',
            hasPrefix: (<Icon name="microphone" onBackground="neutral-strong" size="m" />),
            description: 'Speaking Engagements'
        }
    ];

    const handleServiceSelect = (option: DropdownOptions) => {
        router.push(`/${params?.locale}/${option.value}`);
    };

    // Check if any service page is currently selected
    const isServiceSelected = pathname.startsWith('/cto-services') ||
        pathname.startsWith('/advisory') ||
        pathname.startsWith('/speaking');

    return (
        <>
            <Flex
                className={styles.mask}
                position="fixed" zIndex={9}
                fillWidth minHeight="80" justifyContent="center">
            </Flex>
            <Flex style={{ height: 'fit-content' }}
                className={styles.position}
                as="header"
                zIndex={9}
                fillWidth padding="8"
                justifyContent="center">
                <Flex
                    paddingLeft="12" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    {display.location && (
                        <Flex hide="s">
                            {person.location}
                        </Flex>
                    )}
                </Flex>
                <Flex fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                        padding="4"
                        justifyContent="center">
                        <Flex
                            gap="4"
                            textVariant="body-default-s">
                            {routes['/'] && (
                                <ToggleButton
                                    prefixIcon="home"
                                    href={`/${params?.locale}`}
                                    selected={pathname === "/"}>
                                    <Flex paddingX="2" hide="s">{home.label}</Flex>
                                </ToggleButton>
                            )}
                            {routes['/about'] && (
                                <ToggleButton
                                    prefixIcon="person"
                                    href={`/${params?.locale}/about`}
                                    selected={pathname === "/about"}>
                                    <Flex paddingX="2" hide="s">{about.label}</Flex>
                                </ToggleButton>
                            )}
                            {routes['/work'] && (
                                <ToggleButton
                                    prefixIcon="grid"
                                    href={`/${params?.locale}/work`}
                                    selected={pathname.startsWith('/work')}>
                                    <Flex paddingX="2" hide="s">{work.label}</Flex>
                                </ToggleButton>
                            )}
                            <DropdownWrapper
                                dropdownOptions={servicesOptions}
                                dropdownProps={{
                                    onOptionSelect: handleServiceSelect
                                }}
                                openOnHover
                                selectedOption={pathname.startsWith('/cto-services') ? 'cto-services' :
                                    pathname.startsWith('/advisory') ? 'advisory' :
                                        pathname.startsWith('/speaking') ? 'speaking' : undefined}>
                                <ToggleButton
                                    prefixIcon="compass"
                                    selected={isServiceSelected}>
                                    <Flex paddingX="2" hide="s">Services</Flex>
                                </ToggleButton>
                            </DropdownWrapper>
                            {routes['/blog'] && (
                                <ToggleButton
                                    prefixIcon="book"
                                    href={`/${params?.locale}/blog`}
                                    selected={pathname.startsWith('/blog')}>
                                    <Flex paddingX="2" hide="s">{blog.label}</Flex>
                                </ToggleButton>
                            )}
                            {routes['/testimonials'] && (
                                <ToggleButton
                                    prefixIcon="speechBubble"
                                    href={`/${params?.locale}/testimonials`}
                                    selected={pathname.startsWith('/testimonials')}>
                                    <Flex paddingX="2" hide="s">{testimonials.label}</Flex>
                                </ToggleButton>
                            )}
                            {routes['/gallery'] && (
                                <ToggleButton
                                    prefixIcon="gallery"
                                    href={`/${params?.locale}/gallery`}
                                    selected={pathname.startsWith('/gallery')}>
                                    <Flex paddingX="2" hide="s">{gallery.label}</Flex>
                                </ToggleButton>
                            )}
                            {routes['/contact'] && (
                                <ToggleButton
                                    prefixIcon="email"
                                    href={`/${params?.locale}/contact`}
                                    selected={pathname.startsWith('/contact')}>
                                    <Flex paddingX="2" hide="s">{contact.label}</Flex>
                                </ToggleButton>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex fillWidth justifyContent="flex-end" alignItems="center">
                    <Flex
                        paddingRight="12"
                        justifyContent="flex-end" alignItems="center"
                        textVariant="body-default-s"
                        gap="20">
                        {routing.locales.length > 1 &&
                            <Flex
                                background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                                padding="4" gap="2"
                                justifyContent="center">
                                {i18n && routing.locales.map((locale, index) => (
                                    <ToggleButton
                                        key={index}
                                        selected={params?.locale === locale}
                                        onClick={() => handleLanguageChange(locale)}
                                        className={isPending && 'pointer-events-none opacity-60' || ''}
                                    >
                                        {locale.toUpperCase()}
                                    </ToggleButton>
                                ))}
                            </Flex>
                        }
                        <Flex hide="s">
                            {display.time && (
                                <TimeDisplay timeZone={person.location} />
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}