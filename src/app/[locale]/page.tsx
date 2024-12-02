import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import styles from '@/components/Header.module.scss';

export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {
	const t = await getTranslations();
	const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
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

const offerings = [
	{
		title: "Consulting & Freelance",
		description:
			"I partner with startups, small businesses, and nonprofits to build impactful strategies, products, and tech solutions.",
		iconName: "rocket",
		ctaMessage: "Lets Build Together"
	},
	{
		title: "Advisory & Board Roles",
		description:
			"With experience scaling teams and modernizing operations, I bring strategic value to boards and advisory teams.",
		iconName: "compass",
		ctaMessage: "Lets Talk Strategy"
	},
	{
		title: "Speaking & Workshops",
		description:
			"I share insights on scaling startups, driving innovation, and building impactful products through talks and interactive sessions.",
		iconName: "microphone",
		ctaMessage: "Invite Me to Your Event"
	},
];

export default function Home(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter } = renderContent(t);
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			{/* Hero Section */}
			<Flex
				fillWidth
				className={`${styles.responsiveFlex}`} // Add a responsive class
				paddingY="l"
				gap="xl"
				alignItems="center"
			>
				{/* Content section */}
				<Flex
					direction="column"
					fillWidth
					className={styles.contentSection}
					gap="m"
				>
					<RevealFx translateY="4">
						<Heading wrap="balance" variant="display-strong-l">
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.2}>
						<Flex fillWidth>
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="heading-default-xl"
							>
								{home.subline}
							</Text>
						</Flex>
					</RevealFx>
					<RevealFx translateY="12" delay={0.4}>
						<Flex fillWidth gap="m">
							<Button
								id="about"
								data-border="rounded"
								href={`/${locale}/contact`}
								variant="primary"
								size="l"
							>
								<Flex gap="8" alignItems="center">
									{t("home.cta-primary")}
									<Arrow trigger="#contact" />
								</Flex>
							</Button>
							<Button
								id="about"
								data-border="rounded"
								href={`/${locale}/work`}
								variant="secondary"
								size="l"
							>
								<Flex gap="8" alignItems="center">
									{t("home.cta-secondary")}
									<Arrow trigger="#work" />
								</Flex>
							</Button>
						</Flex>
					</RevealFx>
				</Flex>

				{/* Image section */}
				<Flex
					fillWidth
					className={styles.imageSection}
					justifyContent="center"
				>
					<RevealFx translateY="4">
						<img
							src="/images/avatar.jpg"
							alt="Description"
							style={{
								width: "100%",
								height: "auto",
								objectFit: "cover",
								borderRadius: "24px",
							}}
						/>
					</RevealFx>
				</Flex>

			</Flex>

			{/* Projects Section */}
			<RevealFx translateY="16" delay={0.6}>
				<Projects range={[1, 3]} locale={locale} />
			</RevealFx>

			{/* Blog posts - hiding for initial launch
			// {routes['/blog'] && (
			// 	<Flex
			// 		fillWidth gap="24"
			// 		mobileDirection="column">
			// 		<Flex flex={1} paddingLeft="l">
			// 			<Heading
			// 				as="h2"
			// 				variant="display-strong-xs"
			// 				wrap="balance">
			// 				Latest from the blog
			// 			</Heading>
			// 		</Flex>
			// 		<Flex
			// 			flex={3} paddingX="20">
			// 			<Posts range={[1, 2]} columns="2" locale={locale} />
			// 		</Flex>
			// 	</Flex>
			// )} */}

			{/* More Projects, from 2nd post onwards
			<Projects range={[2]} locale={locale} /> */}

			{/* Newsletter signup */}
			{newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
		</Flex>
	);
}
