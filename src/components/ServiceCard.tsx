"use client";

import { AvatarGroup, Button, Flex, Heading, SmartLink, Text } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
    key: string;
    title: string;
    description: string;
    slug: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    key,
    title,
    description,
    slug,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const t = useTranslations();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(true);
            }, 630);
        }
    };

    return (
        <Flex
            fillWidth gap="s"
            direction="column"
            padding="s"
            style={{
                borderRadius: "20px"
            }}
            border="neutral-medium"
            borderStyle="solid-1">
            <Flex direction="row" mobileDirection="column">
                <Flex direction="column" flex={1}>
                    <Flex
                        direction="column"
                        mobileDirection="column"
                        fillWidth paddingX="s" paddingTop="12" paddingBottom="24" gap="l">
                        {title && (
                            <>
                                <Flex>
                                    <Heading
                                        as="h2"
                                        wrap="balance"
                                        variant="heading-strong-xl">
                                        {title}
                                    </Heading>
                                </Flex>
                                <Text>{description}</Text>
                                <Button
                                    id="title"
                                    data-border="rounded"
                                    href={slug}
                                    variant="primary"
                                    size="l"
                                >
                                    <Flex gap="8" alignItems="center">
                                        Learn More
                                    </Flex>
                                </Button>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
