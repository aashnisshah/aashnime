import { getPosts } from '@/app/utils/utils';
import { Flex, Heading, Text } from '@/once-ui/components';
import { Testimonials } from '@/components/testimonials/Testimonials';
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
            url: `https://${baseURL}/${locale}/testimonials/`,
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

export default function TestimonialsPage(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    let allProjects = getPosts(['src', 'app', '[locale]', 'testimonials', 'testimonials', locale]);

    const t = useTranslations();
    const { person, work } = renderContent(t);

    return (
        <Flex
            fillWidth maxWidth="s"
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
                        url: `https://${baseURL}/testimonials`,
                        image: `${baseURL}/og?title=Design%20Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        hasPart: allProjects.map(project => ({
                            '@type': 'CreativeWork',
                            headline: project.metadata.title,
                            description: project.metadata.summary,
                            url: `https://${baseURL}/testimonials/${project.slug}`,
                            image: `${baseURL}/${project.metadata.image}`,
                        })),
                    }),
                }}
            />
            <Flex direction="column" paddingBottom='m'>
                <Heading
                    className={styles.textAlign}
                    variant="display-strong-xl">
                    Testimonials
                </Heading>
                <Text
                    className={styles.textAlign}
                    variant="display-default-xs"
                    onBackground="neutral-weak">
                    Here from other people that I have worked with.
                </Text>
            </Flex>
            <Testimonials locale={locale} />
        </Flex>
    );
}