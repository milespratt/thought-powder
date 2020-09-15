/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Darker Grotesque",
            variants: [`300`, `400`, `700`],
          },
          {
            family: "Noto Serif",
            variants: [`400`, `700`],
          },
          {
            family: "Montserrat",
            variants: [`300`, `400`, `700`],
          },
          {
            family: "Merriweather",
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-playground`,
  ],
}
