import React from "react";
import {
    Heading,
    Flex,
    Text,
    Button,
    RevealFx,
    Arrow,
    Badge,
} from "@/once-ui/components";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = await getTranslations();
    const { ctoServices } = renderContent(t);
    const title = ctoServices.title;
    const description = ctoServices.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://${baseURL}/${locale}/cto-services`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function CTOServices({
    params: { locale },
}: {
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    const t = getTranslations();
    const { ctoServices } = renderContent(t);

    return (
        <Flex
            maxWidth="l"
            fillWidth
            gap="xl"
            direction="column"
            alignItems="center"
        >
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: ctoServices.title,
                        description: ctoServices.description,
                        url: `https://${baseURL}/${locale}/cto-services`,
                        provider: {
                            "@type": "Person",
                            name: "Aashni Shah",
                        },
                    }),
                }}
            />

            {/* Hero Section */}
            <Flex
                fillWidth
                paddingY="l"
                gap="xl"
                alignItems="center"
                direction="column"
                textAlign="center"
            >
                <RevealFx translateY="4">
                    <Heading wrap="balance" variant="display-strong-l">
                        {ctoServices.headline}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Flex fillWidth maxWidth="m">
                        <Text
                            wrap="balance"
                            onBackground="neutral-weak"
                            variant="heading-default-xl"
                        >
                            {ctoServices.intro}
                        </Text>
                    </Flex>
                </RevealFx>
            </Flex>

            {/* Who This Is For Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={0.3}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {ctoServices.whoThisIsFor.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {ctoServices.whoThisIsFor.sections.map((section, index) => (
                        <RevealFx key={index} translateY="12" delay={0.4 + index * 0.1}>
                            <Flex
                                background="surface"
                                border="neutral-medium"
                                borderStyle="solid-1"
                                radius="m"
                                padding="l"
                                fillWidth
                                direction="column"
                                gap="m"
                            >
                                <Heading as="h3" variant="heading-default-l">
                                    {section.title}
                                </Heading>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {section.description}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* What You Get Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={0.6}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {ctoServices.whatYouGet.title}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="12" delay={0.7}>
                    <Heading as="h3" variant="heading-default-l" wrap="balance">
                        {ctoServices.whatYouGet.subtitle}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="12" delay={0.8}>
                    <Text onBackground="neutral-weak" variant="body-default-l">
                        {ctoServices.whatYouGet.description}
                    </Text>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {ctoServices.whatYouGet.benefits.map((benefit, index) => (
                        <RevealFx key={index} translateY="12" delay={0.9 + index * 0.1}>
                            <Flex gap="m" alignItems="flex-start">
                                <Badge variant="success" size="s">
                                    ✓
                                </Badge>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {benefit}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Engagement Models Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={1.2}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {ctoServices.engagementModels.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {ctoServices.engagementModels.models.map((model, index) => (
                        <RevealFx key={index} translateY="12" delay={1.3 + index * 0.1}>
                            <Flex
                                background="surface"
                                border="neutral-medium"
                                borderStyle="solid-1"
                                radius="m"
                                padding="l"
                                fillWidth
                                direction="column"
                                gap="m"
                            >
                                <Flex gap="m" alignItems="center">
                                    <Badge variant="primary" size="m">
                                        {model.name}
                                    </Badge>
                                </Flex>
                                <Heading as="h3" variant="heading-default-l">
                                    Best For
                                </Heading>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {model.bestFor}
                                </Text>
                                <Heading as="h4" variant="heading-default-m">
                                    What's Included
                                </Heading>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {model.included}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Outcomes Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={1.6}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {ctoServices.outcomes.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {ctoServices.outcomes.results.map((result, index) => (
                        <RevealFx key={index} translateY="12" delay={1.7 + index * 0.1}>
                            <Flex gap="m" alignItems="flex-start">
                                <Badge variant="success" size="s">
                                    📈
                                </Badge>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {result}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Client Feedback Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={2.0}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {ctoServices.clientFeedback.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {ctoServices.clientFeedback.testimonials.map((testimonial, index) => (
                        <RevealFx key={index} translateY="12" delay={2.1 + index * 0.1}>
                            <Flex
                                background="surface"
                                border="neutral-medium"
                                borderStyle="solid-1"
                                radius="m"
                                padding="l"
                                fillWidth
                                direction="column"
                                gap="m"
                            >
                                <Text onBackground="neutral-weak" variant="body-default-l" style={{ fontStyle: 'italic' }}>
                                    "{testimonial.quote}"
                                </Text>
                                <Text onBackground="neutral-medium" variant="body-default-s" textAlign="right">
                                    — {testimonial.author}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Call to Action Section */}
            <Flex fillWidth gap="l" direction="column" alignItems="center" paddingY="l">
                <RevealFx translateY="12" delay={2.4}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance" textAlign="center">
                        {ctoServices.callToAction.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" justifyContent="center" flexWrap="wrap">
                    {ctoServices.callToAction.actions.map((action, index) => (
                        <RevealFx key={index} translateY="12" delay={2.5 + index * 0.1}>
                            <Button
                                data-border="rounded"
                                href={action.href}
                                variant={action.variant as any}
                                size="l"
                            >
                                <Flex gap="8" alignItems="center">
                                    {action.text}
                                    <Arrow />
                                </Flex>
                            </Button>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
}
