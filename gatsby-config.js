module.exports = {
  siteMetadata: {
    title: `Aashni's Archives`,
    author: `Aashni Shah`,
    description: `My small corner of the world.`,
    siteUrl: `https://aashni.me`,
    social: {
      twitter: `aashnisshah`,
      github: `aashnisshah`,
      instagram: `aashnisshah`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: "Aashni's Archives", // website title
              separator: "|", // default
              author: "by @aashnisshah",
              background: require.resolve(
                "./content/assets/social-card-base.png"
              ), // path to 1200x630px file or hex code, defaults to black (#000000)
              fontColor: "#EFEDE7", // defaults to white (#ffffff)
              titleFontSize: 96, // default
              subtitleFontSize: 36, // default
              fontStyle: "monospace", // default
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/aashni-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-82834393-1",
      },
    },
  ],
}
