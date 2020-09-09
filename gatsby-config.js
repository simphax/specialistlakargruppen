module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: `Specialistläkargruppen i Uppsala`,
    description: `Vi bedriver öppen hjärtsjukvård på specialistnivå med erfarna kardiologer med modern utrustning i ändamålsenliga lokaler.`,
    author: `Specialisläkargruppen i Uppsala`,
    siteUrl: `https://specialistlakargruppen.se`,
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
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            stage: 0,
            browsers: [">0.25%", "not dead"],
            importFrom: "src/layout/layout.variables.css",
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`source sans pro:300,400,400i,500,600,700,800`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Specialistläkargruppen`,
        short_name: `SLG`,
        start_url: `/`,
        background_color: `#e56343`,
        theme_color: `#e56343`,
        display: `standalone`,
        icon: `src/images/hearts-square.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`
  ],
}
