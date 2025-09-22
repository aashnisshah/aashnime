import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Aashni',
        lastName: 'Shah',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role: t("person.role"),
        avatar: '/images/avatar.jpg',
        location: 'Kenya & Canada',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
        description: <>{t("newsletter.description")}</>
    }

    const social = [
        // Links are automatically displayed.
        // Import new icons in /once-ui/icons.ts
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/aashnisshah',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/aashnisshah',
        },
        {
            name: 'X',
            icon: 'x',
            link: 'https://www.x.com/aashnisshah',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:contact@aashni.me',
        },
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title", { name: person.name }),
        description: t("home.description", { role: person.role }),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", { name: person.name, role: person.role, location: person.location }),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            link: 'https://calendly.com/aashnisshah/web'
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'FLY',
                    timeframe: t("about.work.experiences.FLY.timeframe"),
                    role: t("about.work.experiences.FLY.role"),
                    achievements: t("about.work.experiences.FLY.achievements").split(";"),
                    images: [ // optional: leave the array empty if you don't want to display images
                        {
                            src: '/images/projects/project-01/cover-01.jpg',
                            alt: 'Once UI Project',
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
                    company: 'Creativ3',
                    timeframe: t("about.work.experiences.Creativ3.timeframe"),
                    role: t("about.work.experiences.Creativ3.role"),
                    achievements: t("about.work.experiences.Creativ3.achievements").split(";"),
                    images: []
                }
            ]
        },
        studies: {
            display: true, // set to false to hide this section
            title: 'Studies',
            institutions: [
                {
                    name: 'University of Jakarta',
                    description: <>{t(`about.studies.institutions.University of Jakarta.description`)}</>,
                },
                {
                    name: 'Build the Future',
                    description: <>{t("about.studies.institutions.Build the Future.description")}</>,
                }
            ]
        },
        technical: {
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Figma',
                    description: <>{t("about.technical.skills.Figma.description")}</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-02.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/projects/project-01/cover-03.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: 'Next.js',
                    description: <>{t("about.technical.skills.Nextjs.description")}</>, // "." not accepted in next-intl namespace
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                }
            ]
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", { name: person.name })
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", { name: person.name })
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const services = {
        label: t("services.label"),
        title: t("services.title"),
        description: t("services.description", { name: person.name })
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const testimonials = {
        label: t("testimonials.label"),
        title: t("testimonials.title"),
        description: t("testimonials.description", { name: person.name })
        // Create new testimonials posts by adding a new .mdx file to app/testimonials/testimonials
        // All posts will be listed on the /testimonials route
    }

    const offerings = {
        offeringsList: [
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
        ]
    };

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", { name: person.name }),
        // Images from https://pexels.com
        images: [
            {
                src: '/images/gallery/img-01.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-02.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-03.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-04.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-05.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-06.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-07.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-08.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-09.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-10.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-11.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-12.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-13.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-14.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
        ]
    }

    const contact = {
        label: t("contact.label"),
        title: t("contact.title"),
        description: t("conact.description")
    }

    const ctoServices = {
        label: "CTO Services",
        title: "Fractional CTO Services",
        description: "Bring Executive-Level Technical Leadership Right When You Need It",
        headline: "Bring Executive-Level Technical Leadership Right When You Need It",
        intro: "Whether you're an early-stage founder, a growing tech-enabled business, or a non-tech company looking to modernize, having the right technical leadership can make or break your success. As a Fractional CTO, I provide strategic guidance, hands-on technical direction, and leadership that helps you build the right systems, hire the right team, and make the right technical bets — at a fraction of the cost of a full-time executive.",
        whoThisIsFor: {
            title: "🛠 Who This Is For",
            sections: [
                {
                    title: "Startups & Founders",
                    description: "You have an idea or MVP and need someone to define the technical roadmap, choose a scalable architecture, and guide you through your first builds and hires."
                },
                {
                    title: "Growing Companies",
                    description: "You have an existing engineering team but need better processes, technical audits, or leadership to scale without burning out your team."
                },
                {
                    title: "Mid-to-Large Non-Tech Companies",
                    description: "You need to modernize your systems, migrate to the cloud, implement automation, or advise your board on technology strategy and risk."
                }
            ]
        },
        whatYouGet: {
            title: "🔑 What You Get",
            subtitle: "Strategic Technical Leadership — Without Full-Time Overhead",
            description: "I act as your technology executive, helping you:",
            benefits: [
                "Set a Clear Technical Vision: Align tech with your business goals, whether that's shipping your MVP fast, improving scalability, or cutting operational costs.",
                "Audit & Optimize Systems: Identify risks, inefficiencies, and opportunities for modernization.",
                "Guide & Mentor Your Team: Coach engineers, establish best practices, and mentor your first technical hires or engineering managers.",
                "Bridge the Business–Tech Gap: Translate complex technical decisions into clear, board-level recommendations.",
                "Support Key Decisions: From vendor selection to build vs. buy choices, ensure you invest wisely."
            ]
        },
        engagementModels: {
            title: "📊 Engagement Models",
            models: [
                {
                    name: "Advisory Retainer",
                    bestFor: "Boards, CEOs, leadership teams needing consistent strategic input",
                    included: "Monthly check-ins, tech risk reviews, roadmap guidance, decision support"
                },
                {
                    name: "Part-Time CTO (4–12 hrs/week)",
                    bestFor: "Startups & growing companies needing hands-on leadership",
                    included: "Technical roadmap creation, architecture reviews, hiring support, process setup"
                },
                {
                    name: "Project-Based Engagements",
                    bestFor: "Companies with a defined initiative (e.g. cloud migration, system overhaul, MVP launch)",
                    included: "End-to-end project leadership, vendor selection, implementation oversight, success metrics"
                }
            ]
        },
        outcomes: {
            title: "📈 Typical Outcomes",
            results: [
                "40–60% faster MVP delivery by avoiding common tech pitfalls",
                "Reduced technical debt and lower long-term maintenance costs",
                "Improved release cadence and engineering team performance",
                "Increased confidence from investors, boards, and leadership teams",
                "Clear technical visibility for decision-making at the executive level"
            ]
        },
        clientFeedback: {
            title: "💬 Client Feedback",
            testimonials: [
                {
                    quote: "Aashni helped us launch our MVP in 6 weeks and set up the right systems to handle early traction. Her leadership saved us months of guesswork.",
                    author: "Founder, Early-Stage SaaS Company"
                },
                {
                    quote: "Our board now has a clear view of our technical risks and opportunities. Aashni translated complex systems into language we could act on.",
                    author: "CEO, Mid-Market Manufacturing Business"
                }
            ]
        },
        callToAction: {
            title: "🚀 Ready to Level Up Your Technology Leadership?",
            actions: [
                {
                    text: "Schedule a Fractional CTO Consultation (15-min discovery call)",
                    href: "https://calendly.com/aashnisshah/web",
                    variant: "primary"
                },
                {
                    text: "Download My Tech Modernization Checklist",
                    href: "#",
                    variant: "secondary"
                }
            ]
        }
    };

    const speaking = {
        label: "Speaking",
        title: "Speaking Engagements",
        description: "Bring Aashni to Your Stage - Engaging speaker on technology, leadership, and entrepreneurship",
        headline: "Bring Aashni to Your Stage",
        intro: "Aashni is an engaging and insightful speaker who brings a unique mix of technical expertise, business acumen, and a passion for empowering others. She has spoken at conferences, startup events, and private company offsites, sharing practical advice and inspiring stories.",
        popularTopics: {
            title: "Popular Topics",
            topics: [
                {
                    title: "AI in Business",
                    description: "Practical ways to leverage AI without the hype to drive measurable outcomes."
                },
                {
                    title: "Technology Strategy for Non-Technical Leaders",
                    description: "How executives can make confident decisions about technology, innovation, and digital transformation."
                },
                {
                    title: "Scaling Beyond the MVP",
                    description: "Lessons learned from building and scaling products used by millions."
                },
                {
                    title: "Women in Tech & Leadership",
                    description: "Real talk about career growth, breaking barriers, and creating inclusive tech cultures."
                },
                {
                    title: "From Engineer to Executive",
                    description: "How to transition from building products to building companies."
                }
            ]
        },
        speakingEngagements: {
            title: "Speaking Engagements",
            description: "Aashni has shared her insights at events including:",
            events: [
                {
                    name: "SaaS North",
                    description: "Panel on AI adoption in SaaS products"
                },
                {
                    name: "Microsoft Alumni Network",
                    description: "Keynote on transitioning from corporate to entrepreneurship"
                },
                {
                    name: "Techstars Founder Talks",
                    description: "Workshop on scaling technology teams"
                },
                {
                    name: "Women in Product Conference",
                    description: "Fireside chat on leadership and growth"
                }
            ]
        },
        whyInvite: {
            title: "Why Invite Aashni",
            reasons: [
                {
                    title: "Actionable Insights",
                    description: "Every talk leaves the audience with frameworks and next steps they can apply immediately."
                },
                {
                    title: "Relatable Storytelling",
                    description: "Drawing from experiences at Microsoft, Amazon, startups, and advising boards."
                },
                {
                    title: "Engagement",
                    description: "Aashni loves Q&A sessions and makes space for interaction."
                }
            ]
        },
        audienceFit: {
            title: "Audience Fit",
            audiences: [
                "Executive teams & boards seeking to understand tech strategy",
                "Startup founders and early-stage teams",
                "Corporate innovation programs and accelerators",
                "University and community events focused on leadership or entrepreneurship"
            ]
        },
        booking: {
            title: "Booking",
            description: "Want to have Aashni speak at your next event? Fill out the form below or email contact@aashni.me with details about your event, audience, and preferred topic.",
            email: "contact@aashni.me",
            ctaText: "Book Aashni for Your Event",
            ctaHref: "mailto:contact@aashni.me"
        }
    };

    const advisory = {
        label: "Advisory",
        title: "Advisory & Board Engagements",
        description: "Strategic Guidance for Founders, Executives, and Boards",
        headline: "Strategic Guidance for Founders, Executives, and Boards",
        intro: "Aashni brings a unique combination of technical expertise, business insight, and leadership experience to help organizations navigate complex technology and innovation challenges. Whether advising startups, growing companies, or mid-to-large non-tech organizations, she partners with leaders to provide actionable, board-ready guidance.",
        advisoryServices: {
            title: "Advisory Services",
            services: [
                {
                    title: "Technical Due Diligence",
                    description: "Evaluate technology risk, scalability, and product viability for investors, boards, and leadership teams."
                },
                {
                    title: "Digital Transformation & Modernization",
                    description: "Guide non-tech companies through system upgrades, cloud adoption, and automation projects."
                },
                {
                    title: "Innovation Roadmaps",
                    description: "Help organizations prioritize and plan technology investments to maximize ROI."
                },
                {
                    title: "Executive Mentorship",
                    description: "Coach CTOs, engineering leaders, and founders on strategic decision-making, team leadership, and scaling technical operations."
                }
            ]
        },
        boardEngagements: {
            title: "Board Engagements",
            description: "Serve as a trusted advisor to boards, providing insight into technology strategy, risk, and operational readiness.",
            responsibilities: [
                "Help boards understand technical challenges and opportunities, bridging the gap between executive teams and non-technical board members.",
                "Support governance, cybersecurity oversight, and risk management initiatives to ensure informed board-level decision-making."
            ]
        },
        outcomes: {
            title: "Typical Outcomes",
            results: [
                "Clear understanding of technology risk and opportunities at the executive and board level",
                "Structured technology strategy aligned with business objectives",
                "Accelerated decision-making and reduced uncertainty around tech investments",
                "Enhanced leadership and technical capability across teams"
            ]
        },
        whyPartner: {
            title: "Why Partner with Aashni",
            reasons: [
                {
                    title: "Strategic Insight",
                    description: "Combines hands-on technical experience with business strategy to guide smart decisions."
                },
                {
                    title: "Board-Level Communication",
                    description: "Explains complex technical concepts in plain language for executives and boards."
                },
                {
                    title: "Action-Oriented",
                    description: "Provides practical recommendations that lead to measurable outcomes."
                }
            ]
        },
        audienceFit: {
            title: "Audience Fit",
            audiences: [
                "Startup founders and executive teams looking for guidance on scaling technology",
                "CEOs and COOs of mid-to-large non-tech companies seeking digital transformation leadership",
                "Boards seeking clear technical insight and risk management guidance",
                "Investors and venture partners needing technical due diligence on prospective companies"
            ]
        },
        engagementOptions: {
            title: "Engagement Options",
            options: [
                {
                    name: "Retainer Advisory",
                    description: "Ongoing strategic guidance for leadership teams or boards"
                },
                {
                    name: "Project-Based Engagements",
                    description: "Defined initiatives such as tech audits, system modernization, or innovation roadmap planning"
                },
                {
                    name: "Mentorship & Coaching",
                    description: "Regular sessions to develop technical leaders and support executive decision-making"
                }
            ]
        },
        booking: {
            title: "Booking",
            description: "To engage Aashni for advisory or board services, fill out the form below or email contact@aashni.me with details about your organization, needs, and preferred engagement model.",
            email: "contact@aashni.me",
            ctaText: "Schedule a Consultation",
            ctaHref: "mailto:contact@aashni.me"
        }
    };

    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        services,
        gallery,
        testimonials,
        contact,
        ctoServices,
        speaking,
        advisory,
        offerings
    }
};

export { createI18nContent };