"use client";

import { Avatar, Button, Flex, Heading, SmartImage, SmartLink, Tag, Text } from '@/once-ui/components';
import styles from './Testimonials.module.scss';
import { formatDate } from '@/app/utils/formatDate';

interface PostProps {
    post: any;
    thumbnail: boolean;
}

export default function TestimonialPosts({ post, thumbnail }: PostProps) {
    return (
        <SmartLink
            className={styles.hover}
            style={{
                textDecoration: 'none',
                margin: '0',
                height: 'fit-content',
            }}
            key={post.slug}
            href={`/testimonials/${post.slug}`}>
            <Flex
                position="relative"
                mobileDirection="column"
                fillWidth paddingY="12" paddingX="16" gap="32">
                <Flex direction="row" gap="16">
                    <Flex direction="column" marginRight='m' gap="16">
                        <img src={post.metadata.referral[0].avatar} width={"140px"} style={{ borderRadius: "24px" }} />
                    </Flex>
                    <Flex
                        position="relative"
                        fillWidth gap="8"
                        direction="column" justifyContent="center">
                        <Heading
                            as="h2"
                            variant="heading-strong-l"
                            wrap="balance">
                            {post.metadata.title}
                        </Heading>
                        <Text
                            variant="label-default-s"
                            onBackground="neutral-weak">
                            {post.metadata.summary}
                        </Text>
                        <Button
                            variant="tertiary"
                            size="m"
                            prefixIcon="chevronRight">
                            Read More
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </SmartLink>
    );
}