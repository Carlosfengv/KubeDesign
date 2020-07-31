module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/Config`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Documents`,
        path: `${__dirname}/Documents/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
        /* defaultLayouts: {
          default: require.resolve('./src/Template/DocLayout/index.js')
        } */
      },
    },
    /* {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/Documents/`,
      },
    }, */
    `gatsby-plugin-sass`,
  ],
}
