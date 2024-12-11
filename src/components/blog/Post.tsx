"use client";

import { Flex, Heading, SmartImage, SmartLink, Tag, Text } from '@/once-ui/components';
import styles from './Posts.module.scss';
import { formatDate } from '@/app/utils/formatDate';

interface PostProps {
    post: any;
    thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
    console.log(post, null, 2);
    return (
        <SmartLink
            className={styles.hover}
            style={{
                textDecoration: 'none',
                margin: '0',
                height: 'fit-content',
            }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Flex
                position="relative"
                mobileDirection="column"
                fillWidth paddingY="12" paddingX="16" gap="32"
                border="neutral-medium"
                borderStyle="solid-1"
            >
                {post.metadata.image && thumbnail && (
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
                            src={post.metadata.image}
                            alt={'Thumbnail of ' + post.metadata.title}
                            aspectRatio="16 / 9"
                        />
                    </Flex>
                )}
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
                        {formatDate(post.metadata.publishedAt, false)}
                    </Text>

                    <Flex
                        // gap="xs" // Adjust spacing between tags
                        direction="row" // Ensures a horizontal layout
                        wrap={true} // Allows wrapping to the next line if needed
                        className="tags-container"
                    >
                        {post.metadata.categories && post.metadata.categories.map((category: string, index: number) => (
                            <Tag
                                className="mt-8"
                                label={category}
                                variant="neutral" />
                        ))
                        }
                    </Flex>
                </Flex>
            </Flex>
        </SmartLink>
    );
}