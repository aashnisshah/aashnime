import { getPosts } from '@/app/utils/utils';
import { Flex, Heading, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import styles from '@/components/about/about.module.scss'
import { ServicesList } from '@/components/services/ServicesList';
import Offerings from '@/components/contact/Offerings';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {

    const t = await getTranslations();
    const { services } = renderContent(t);

    const title = services.title;
    const description = services.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/services/`,
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

export default function Services(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    console.log(`page is loaded`)
    let allProjects = getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]);

    const t = useTranslations();
    const { person, services, ctoServices, advisory, speaking, work } = renderContent(t);

    const servicesList = [
        {
            title: ctoServices.title,
            description: ctoServices.description,
            slug: "/cto-services",
        },
        {
            title: advisory.title,
            description: advisory.description,
            slug: "/advisory",
        },
        {
            title: speaking.title,
            description: speaking.description,
            slug: "/speaking",
        },
        {
            title: work.title,
            description: work.description,
            slug: "/work",
        }
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
                        '@type': 'CollectionPage',
                        headline: services.title,
                        description: services.description,
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
                        My Services
                    </Heading>
                    <Text
                        className={styles.textAlign}
                        variant="display-default-xs"
                        onBackground="neutral-weak">
                        Below is a brief overview of the services I offer.
                    </Text>
                </Flex>
                <Flex>
                    <Flex>
                        <ServicesList servicesList={servicesList} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}