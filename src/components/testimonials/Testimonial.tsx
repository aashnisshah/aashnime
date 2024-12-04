"use client";

import { Avatar, Flex, Heading, SmartImage, SmartLink, Tag, Text } from '@/once-ui/components';
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
                {post.metadata.referral.avatar && thumbnail && (
                    <Flex
                        maxWidth={20} fillWidth
                        className={styles.image}>
                        <SmartImage
                            priority
                            sizes="640px"
                            style={{
                                cursor: 'pointer',
                                border: '1px solid var(--neutral-alpha-weak)'
                            }}
                            radius="m"
                            src={post.metadata.avatar}
                            alt={'Thumbnail of ' + post.metadata.title}
                            aspectRatio="16 / 9"
                        />
                    </Flex>
                )}
                <Flex direction="row">
                    <Flex direction="column">
                        <Avatar
                            size="l"
                            src={post.metadata.avatar} />
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
                    </Flex>
                </Flex>
            </Flex>
        </SmartLink>
    );
}