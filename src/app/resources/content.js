import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aashni",
  lastName: "Shah",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Tech Leader, Mentor, and Builder",
  avatar: "/images/avatar.jpg",
  location: "Kenya & Canada", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about my experiences and learnings.</>,
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aashnisshah",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aashnisshah",
  },
  {
    name: "X",
    icon: "x",
    link: "https://www.x.com/aashnisshah",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@aashni.me",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fractional CTO & Innovation Advisor</>,
  subline: (
    <>
      Helping startups and established companies modernize, scale, and thrive
      with technology.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/aashnisshah/web",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aashni is a tech innovator and startup strategist who excels at building
        impactful products and solutions.With a background spanning software
        engineering, entrepreneurship, and advisory roles, Aashni combines
        technical expertise with a passion for simplifying complex challenges
        through innovative strategies and scalable solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "HypeDocs",
        timeframe: "2022 - Present",
        role: "Founder, CEO",
        achievements: [
          <>
            Launched an AI-powered audio journaling app to track and amplify
            positive moments throughout the day.
          </>,
        ],
        images: [],
      },
      {
        company: "Innovative Tech Labs",
        timeframe: "2023 - Present",
        role: "Director",
        achievements: [
          <>
            Directed the development of software and technology solutions for a
            portfolio of companies spanning hospitality, automotive,
            entertainment, import/export, and retail sectors.
          </>,
          <>
            Led a cross-functional team in designing and implementing key
            systems, including loyalty programs, CRM platforms, website
            overhauls, and internal applications, resulting in enhanced
            operational efficiency and customer engagement.
          </>,
        ],
        images: [],
      },
      {
        company: "Consulting",
        timeframe: "2023 - Present",
        role: "Consultant",
        achievements: [
          <>
            Worked with multiple startups to explore and build 0-to-1 products,
            identifying business models, user needs, and technical solutions.
          </>,
          <>
            Developed products using tools like React and Next.js, as well as
            no-code platforms such as Bubble, Webflow, and WordPress.
          </>,
          <>
            Helped startups save over $50k through efficient setup,
            implementation, and prototyping support.
          </>,
        ],
        images: [],
      },
      {
        company: "Square (Cash App)",
        timeframe: "2018 - 2019",
        role: "Software Development Engineer",
        achievements: [
          <>
            Led development of SEO features, reducing scammer success rates by
            95% through improved content management.
          </>,
          <>
            Converted the Support Engineering team to Agile processes, reducing
            ticket resolution times from 3 weeks to 1 week.
          </>,
          <>
            Orchestrated a multi-platform CMS migration, decreasing content
            update times by 70% and ensuring seamless international launches.
          </>,
        ],
        images: [],
      },
      {
        company: "Elixir Labs",
        timeframe: "2016 - 2020",
        role: "Chief Executive Officer and Product Manager",
        achievements: [
          <>
            Developed a product vision with nonprofit partners, leading to the
            launch of 2 global projects and active development of 3 more.
          </>,
          <>
            Managed cross-functional teams of product managers, designers, and
            developers using tools like Trello, Figma, and Slack.
          </>,
          <>
            Prioritized developer-friendly technology and maintainable solutions
            for each project, streamlining ongoing operations.
          </>,
        ],
        images: [],
      },
      {
        company: "Microsoft",
        timeframe: "2016 - 2017",
        role: "Software Development Engineer",
        achievements: [
          <>
            Enhanced monitoring capabilities for Microsoft Azure’s internal DNS
            service, enabling faster issue resolution for Tier 0 services.
          </>,
          <>
            Led tenant migrations with zero downtime during cluster
            decommissioning projects, maintaining uninterrupted service for
            customers.
          </>,
          <>
            Conducted stress testing to optimize resource usage, improving
            system efficiency for critical Azure services.
          </>,
        ],
        images: [],
      },
      {
        company: "Amazon",
        timeframe: "Summer 2014",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Collaborated with the Kindle team to support the launch of the
            Kindle Unlimited product.
          </>,
          <>
            Developed a system to integrate digital and physical product
            management, allowing customers to bundle Kindle Unlimited
            subscriptions with Kindle e-reader purchases.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Toronto",
        description: <>Bachelors in Computer Science.</>,
      },
      {
        name: "Quantic MBA",
        description: <>MBA</>,
      },
      {
        name: "International School of Kenya",
        description: <>IB Program for High School</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      // {
      //     title: 'Figma',
      //     description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
      //     images: [
      //         {
      //             src: '/images/projects/project-01/cover-02.jpg',
      //             alt: 'Project image',
      //             width: 16,
      //             height: 9
      //         },
      //         {
      //             src: '/images/projects/project-01/cover-03.jpg',
      //             alt: 'Project image',
      //             width: 16,
      //             height: 9
      //         },
      //     ]
      // },
      // {
      //     title: 'Next.js',
      //     description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
      //     images: [
      //         {
      //             src: '/images/projects/project-01/cover-04.jpg',
      //             alt: 'Project image',
      //             width: 16,
      //             height: 9
      //         },
      //     ]
      // }
      {
        title: "Technical Skills",
        description: [
          <>Javascript - ReactJS, React Native, NextJS, NodeJS</>,
          <>Java</>,
          <>Kotlin</>,
          <>PHP</>,
          <>and more</>,
        ],
        images: [],
      },
      {
        title: "No-Code Technical Skills",
        description: [
          <>Bubble</>,
          <>Webflow</>,
          <>Wordpress</>,
          <>Shopify</>,
          <>Zapier</>,
          <>Make</>,
          <>and more</>,
        ],
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const testimonials = {
  label: "Testimonials",
  title: "Testimonials",
  description: `Read what others have to say about ${person.name}`,
  // Create new testimonials posts by adding a new .mdx file to app/testimonials/testimonials
  // All posts will be listed on the /testimonials route
};

const contact = {
  label: "Contact",
  title: "Contact Aashni",
  description: `Get in touch with Aashni, or follow her on other social platforms`,
  // Create new testimonials posts by adding a new .mdx file to app/testimonials/testimonials
  // All posts will be listed on the /testimonials route
};

const offerings = {
  offeringsList: [
    {
      title: "For Startups & Founders",
      subtitle: "Launch & Scale with Confidence",
      description:
        "I help you design your MVP roadmap, pick the right tech stack, hire your first engineers, and set processes that keep your team moving fast — without technical debt slowing you down.",
      outcomesList: [
        "Clear technical roadmap",
        "First MVP shipped faster",
        "Strong hiring plan for first tech team",
      ],
      iconName: "rocket",
      ctaMessage: "Lets Build Together",
    },
    {
      title: "For Growing Companies",
      subtitle: "Scale Systems, Teams & Processes",
      description:
        "As your company grows, I make sure your tech stack scales with you. I lead technical audits, streamline workflows, and coach your engineering managers to keep quality and delivery high.",
      outcomesList: [
        "Reduced downtime & faster releases",
        "Processes that scale with growth",
        "Stronger engineering leadership & culture",
      ],
      iconName: "compass",
      ctaMessage: "Lets Talk Strategy",
    },
    {
      title: "For Mid-to-Large Non-Tech Companies",
      subtitle: "Lead Your Digital Transformation",
      description:
        "I guide CEOs, COOs, and boards through technology evolution — from cloud migrations to system integrations. I bridge the gap between business strategy and technical execution, reducing risk and building long-term resilience.",
      outcomesList: [
        "Reduced operational inefficiency",
        "Increased business agility & innovation capability",
        "Board-level visibility into technical risks & opportunities",
      ],
      iconName: "microphone",
      ctaMessage: "Invite Me to Your Event",
    },
  ],
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  testimonials,
  contact,
  offerings,
};
