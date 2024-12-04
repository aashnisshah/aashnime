import { getPosts } from '@/app/utils/utils';
import { Flex, Heading, Text } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import styles from '@/components/about/about.module.scss'

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {

    const t = await getTranslations();
    const { work } = renderContent(t);

    const title = work.title;
    const description = work.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/work/`,
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

export default function Work(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    let allProjects = getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]);

    const t = useTranslations();
    const { person, work } = renderContent(t);

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
                        '@type': 'CollectionPage',
                        headline: work.title,
                        description: work.description,
                        url: `https://${baseURL}/projects`,
                        image: `${baseURL}/og?title=Design%20Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        hasPart: allProjects.map(project => ({
                            '@type': 'CreativeWork',
                            headline: project.metadata.title,
                            description: project.metadata.summary,
                            url: `https://${baseURL}/projects/${project.slug}`,
                            image: `${baseURL}/${project.metadata.image}`,
                        })),
                    }),
                }}
            />
            <Flex direction="column" gap="l">
                <Flex direction="column" paddingBottom='m'>
                    <Heading
                        className={styles.textAlign}
                        variant="display-strong-xl">
                        My Work
                    </Heading>
                    <Text
                        className={styles.textAlign}
                        variant="display-default-xs"
                        onBackground="neutral-weak">
                        Below is a brief overview of some of the work and projects I have completed in recent years.
                    </Text>
                </Flex>
                <Flex>
                    <Flex>
                        <Projects locale={locale} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}