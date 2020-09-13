module.exports = {
  siteMetadata: {
    title: `Ivan's Blog`,
    description: `Personal Blog`,
    author: `Ivan`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
