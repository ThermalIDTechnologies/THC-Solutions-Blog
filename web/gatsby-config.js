require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `THC Solutions Blog`,
    description: `Find information on everything Cannabis through our blog!`,
    author: `@`,
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
        name: `thc-us-cannabis-policy-page`,
        short_name: `thc-us-cannabis-map`,
        start_url: `/`,
        background_color: `#4a7729 `,
        theme_color: `#4a7729 `,
        display: `minimal-ui`,
        icon: `src/images/thc-logo@300x.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.MY_SANITY_PROJECT_ID,
        dataset: process.env.MY_SANITY_DATASET,
        token: process.env.MY_SANITY_TOKEN,
        overlayDrafts: `true`,
        watchMode: `true`,
      },
    },
    {
      resolve: `gatsby-plugin-apollo`,
      options: {
        uri: `https://api.monday.com/v2/`,
        headers: {
          Authorization: `${process.env.MONDAY_API_TOKEN}`,
        },
      },
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: "crjars",
        apiKey: `${process.env.CLOUDINARY_API_KEY}`,
        apiSecret: `${process.env.CLOUDINARY_API_SECRET}`,

        // This folder will be created if it doesn’t exist.
        uploadFolder: "gatsby-cloudinary",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-83589888-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
