import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, SmartLink, Tag, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Offerings from '@/components/contact/offerings';
import { offerings } from '@/app/resources/content';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { person, about, social } = renderContent(t);
    const title = about.title;
    const description = about.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/about`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Contact(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { person, about, social } = renderContent(t);
    const structure = [
        {
            title: about.intro.title,
            display: about.intro.display,
            items: []
        },
        {
            title: about.work.title,
            display: about.work.display,
            items: about.work.experiences.map(experience => experience.company)
        },
        {
            title: about.studies.title,
            display: about.studies.display,
            items: about.studies.institutions.map(institution => institution.name)
        },
        {
            title: about.technical.title,
            display: about.technical.display,
            items: about.technical.skills.map(skill => skill.title)
        },
    ]
    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
                        },
                    }),
                }}
            />
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
                {about.avatar.display && (
                    <Flex
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <Avatar
                            src={person.avatar}
                            size="xl" />
                        <Flex
                            gap="8"
                            alignItems="center">
                            <Icon
                                onBackground="accent-weak"
                                name="globe" />
                            {person.location}
                        </Flex>
                        {person.languages.length > 0 && (
                            <Flex
                                wrap
                                gap="8">
                                {person.languages.map((language, index) => (
                                    <Tag
                                        key={index}
                                        size="l">
                                        {language}
                                    </Tag>
                                ))}
                            </Flex>
                        )}
                        <Flex
                            wrap
                            gap="8">
                            <SmartLink
                                href={about.calendar.link}
                                style={{
                                    width: 'fit-content',
                                    textDecoration: 'none'
                                }}
                            >
                                <Flex
                                    className={styles.blockAlign}
                                    style={{
                                        backdropFilter: 'blur(var(--static-space-1))',
                                        border: '1px solid var(--brand-alpha-medium)',
                                        width: 'fit-content',
                                        cursor: 'pointer' // Add cursor pointer to indicate clickability
                                    }}
                                    alpha="brand-weak"
                                    radius="full"
                                    fillWidth
                                    padding="4"
                                    gap="8"
                                    marginBottom="m"
                                    alignItems="center"
                                >
                                    <Flex paddingLeft="12">
                                        <Icon
                                            name="calendar"
                                            onBackground="brand-weak"
                                        />
                                    </Flex>
                                    <Flex
                                        paddingX="8"
                                    >
                                        Schedule a call
                                    </Flex>
                                    <IconButton
                                        data-border="rounded"
                                        variant="tertiary"
                                        icon="chevronRight" />
                                </Flex>
                            </SmartLink>
                        </Flex>
                    </Flex>
                )}
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} maxWidth={40} direction="column">
                    <Flex
                        id={about.intro.title}
                        fillWidth minHeight="160"
                        direction="column" justifyContent="center"
                        marginBottom="32">
                        <Heading
                            className={styles.textAlign}
                            variant="display-strong-xl">
                            {person.name}
                        </Heading>
                        <Text
                            className={styles.textAlign}
                            variant="display-default-xs"
                            onBackground="neutral-weak">
                            {person.role}
                        </Text>
                        {social.length > 0 && (
                            <Flex
                                className={styles.blockAlign}
                                paddingTop="20" paddingBottom="8" gap="8" wrap>
                                {social.map((item) => (
                                    item.link && (
                                        <Button
                                            key={item.name}
                                            href={item.link}
                                            prefixIcon={item.icon}
                                            label={item.name}
                                            size="s"
                                            variant="tertiary" />
                                    )
                                ))}
                            </Flex>
                        )}
                    </Flex>

                    {about.intro.display && (
                        <Flex
                            direction="column"
                            textVariant="body-default-l"
                            fillWidth gap="m" marginBottom="xl">
                            {about.intro.description}
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <Offerings offeringsList={offerings.offeringsList} />
        </Flex>
    );
}