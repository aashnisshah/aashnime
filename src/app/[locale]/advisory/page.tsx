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
    const { advisory } = renderContent(t);
    const title = advisory.title;
    const description = advisory.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://${baseURL}/${locale}/advisory`,
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

export default function Advisory({
    params: { locale },
}: {
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    const t = getTranslations();
    const { advisory } = renderContent(t);

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
                        name: advisory.title,
                        description: advisory.description,
                        url: `https://${baseURL}/${locale}/advisory`,
                        provider: {
                            "@type": "Person",
                            name: "Aashni Shah",
                        },
                        serviceType: "Advisory Services",
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
                        {advisory.headline}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Flex fillWidth maxWidth="m">
                        <Text
                            wrap="balance"
                            onBackground="neutral-weak"
                            variant="heading-default-xl"
                        >
                            {advisory.intro}
                        </Text>
                    </Flex>
                </RevealFx>
            </Flex>

            {/* Advisory Services Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={0.3}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {advisory.advisoryServices.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {advisory.advisoryServices.services.map((service, index) => (
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
                                <Flex gap="m" alignItems="center">
                                    <Badge variant="primary" size="m">
                                        {service.title}
                                    </Badge>
                                </Flex>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {service.description}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Board Engagements Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={0.8}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {advisory.boardEngagements.title}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="12" delay={0.9}>
                    <Text onBackground="neutral-weak" variant="body-default-l">
                        {advisory.boardEngagements.description}
                    </Text>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {advisory.boardEngagements.responsibilities.map((responsibility, index) => (
                        <RevealFx key={index} translateY="12" delay={1.0 + index * 0.1}>
                            <Flex gap="m" alignItems="flex-start">
                                <Badge variant="success" size="s">
                                    ✓
                                </Badge>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {responsibility}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Outcomes Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={1.2}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {advisory.outcomes.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {advisory.outcomes.results.map((result, index) => (
                        <RevealFx key={index} translateY="12" delay={1.3 + index * 0.1}>
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

            {/* Why Partner Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={1.7}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {advisory.whyPartner.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {advisory.whyPartner.reasons.map((reason, index) => (
                        <RevealFx key={index} translateY="12" delay={1.8 + index * 0.1}>
                            <Flex gap="m" alignItems="flex-start">
                                <Badge variant="success" size="s">
                                    ✓
                                </Badge>
                                <Flex direction="column" gap="xs">
                                    <Heading as="h3" variant="heading-default-m">
                                        {reason.title}
                                    </Heading>
                                    <Text onBackground="neutral-weak" variant="body-default-l">
                                        {reason.description}
                                    </Text>
                                </Flex>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Audience Fit Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={2.1}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {advisory.audienceFit.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {advisory.audienceFit.audiences.map((audience, index) => (
                        <RevealFx key={index} translateY="12" delay={2.2 + index * 0.1}>
                            <Flex gap="m" alignItems="flex-start">
                                <Badge variant="success" size="s">
                                    🎯
                                </Badge>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {audience}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Engagement Options Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={2.6}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {advisory.engagementOptions.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {advisory.engagementOptions.options.map((option, index) => (
                        <RevealFx key={index} translateY="12" delay={2.7 + index * 0.1}>
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
                                        {option.name}
                                    </Badge>
                                </Flex>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {option.description}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Booking Section */}
            <Flex fillWidth gap="l" direction="column" alignItems="center" paddingY="l">
                <RevealFx translateY="12" delay={3.0}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance" textAlign="center">
                        {advisory.booking.title}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="12" delay={3.1}>
                    <Flex fillWidth maxWidth="m" textAlign="center">
                        <Text onBackground="neutral-weak" variant="body-default-l">
                            {advisory.booking.description}
                        </Text>
                    </Flex>
                </RevealFx>
                <RevealFx translateY="12" delay={3.2}>
                    <Button
                        data-border="rounded"
                        href={advisory.booking.ctaHref}
                        variant="primary"
                        size="l"
                    >
                        <Flex gap="8" alignItems="center">
                            {advisory.booking.ctaText}
                            <Arrow />
                        </Flex>
                    </Button>
                </RevealFx>
            </Flex>
        </Flex>
    );
}
