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
    const { speaking } = renderContent(t);
    const title = speaking.title;
    const description = speaking.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://${baseURL}/${locale}/speaking`,
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

export default function Speaking({
    params: { locale },
}: {
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    const t = getTranslations();
    const { speaking } = renderContent(t);

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
                        "@type": "Person",
                        name: "Aashni Shah",
                        jobTitle: "Speaker",
                        description: speaking.description,
                        url: `https://${baseURL}/${locale}/speaking`,
                        knowsAbout: speaking.popularTopics.topics.map(topic => topic.title),
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
                        {speaking.headline}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Flex fillWidth maxWidth="m">
                        <Text
                            wrap="balance"
                            onBackground="neutral-weak"
                            variant="heading-default-xl"
                        >
                            {speaking.intro}
                        </Text>
                    </Flex>
                </RevealFx>
            </Flex>

            {/* Popular Topics Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={0.3}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {speaking.popularTopics.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {speaking.popularTopics.topics.map((topic, index) => (
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
                                        {topic.title}
                                    </Badge>
                                </Flex>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {topic.description}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Speaking Engagements Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={0.8}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {speaking.speakingEngagements.title}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="12" delay={0.9}>
                    <Text onBackground="neutral-weak" variant="body-default-l">
                        {speaking.speakingEngagements.description}
                    </Text>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {speaking.speakingEngagements.events.map((event, index) => (
                        <RevealFx key={index} translateY="12" delay={1.0 + index * 0.1}>
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
                                    {event.name}
                                </Heading>
                                <Text onBackground="neutral-weak" variant="body-default-l">
                                    {event.description}
                                </Text>
                            </Flex>
                        </RevealFx>
                    ))}
                </Flex>
            </Flex>

            {/* Why Invite Section */}
            <Flex fillWidth gap="l" direction="column">
                <RevealFx translateY="12" delay={1.4}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {speaking.whyInvite.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {speaking.whyInvite.reasons.map((reason, index) => (
                        <RevealFx key={index} translateY="12" delay={1.5 + index * 0.1}>
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
                <RevealFx translateY="12" delay={1.8}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance">
                        {speaking.audienceFit.title}
                    </Heading>
                </RevealFx>
                <Flex fillWidth gap="m" direction="column">
                    {speaking.audienceFit.audiences.map((audience, index) => (
                        <RevealFx key={index} translateY="12" delay={1.9 + index * 0.1}>
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

            {/* Booking Section */}
            <Flex fillWidth gap="l" direction="column" alignItems="center" paddingY="l">
                <RevealFx translateY="12" delay={2.2}>
                    <Heading as="h2" variant="display-strong-xs" wrap="balance" textAlign="center">
                        {speaking.booking.title}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="12" delay={2.3}>
                    <Flex fillWidth maxWidth="m" textAlign="center">
                        <Text onBackground="neutral-weak" variant="body-default-l">
                            {speaking.booking.description}
                        </Text>
                    </Flex>
                </RevealFx>
                <RevealFx translateY="12" delay={2.4}>
                    <Button
                        data-border="rounded"
                        href={speaking.booking.ctaHref}
                        variant="primary"
                        size="l"
                    >
                        <Flex gap="8" alignItems="center">
                            {speaking.booking.ctaText}
                            <Arrow />
                        </Flex>
                    </Button>
                </RevealFx>
            </Flex>
        </Flex>
    );
}
