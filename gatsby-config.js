require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Larissa Abreu`,
    position: `Front-end Developer`,
    description: `Site com algumas talks minhas e alguns textos que fiz :)`,
    author: `@larissaabreu`,
    siteUrl: `https://larissaabreu.dev`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Larissa Abreu`,
        short_name: `Larissa Abreu`,
        start_url: `/`,
        background_color: `#1C1C1C`,
        theme_color: `#1C1C1C`,
        display: `minimal-ui`,
        icon: `src/images/larissa-abreu-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
