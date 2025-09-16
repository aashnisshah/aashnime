import { getPosts } from '@/app/utils/utils'
import { baseURL } from '@/app/resources'
import { routing } from '@/i18n/routing'

export default async function sitemap() {

    const locales = routing.locales;

    let blogs = locales.flatMap((locale) =>
        getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale]).map((post) => ({
            url: `${baseURL}/${locale}/blog/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }))
    );

    let works = locales.flatMap((locale) =>
        getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]).map((post) => ({
            url: `${baseURL}/${locale}/work/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }))
    );

    let testimonials = locales.flatMap((locale) =>
        getPosts(['src', 'app', '[locale]', 'testimonials', 'testimonials', locale]).map((post) => ({
            url: `${baseURL}/${locale}/testimonials/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }))
    );

    let routes = locales.flatMap((locale) =>
        ['', '/blog', '/work', '/testimonials', '/cto-services', '/speaking', '/advisory'].map((route) => ({
            url: `${baseURL}/${locale}${route}`,
            lastModified: new Date().toISOString().split('T')[0],
        }))
    );

    return [...routes, ...blogs, ...works, ...testimonials]
}