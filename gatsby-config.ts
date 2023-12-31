import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`pl`, `en`, `de`],
        defaultLanguage: `pl`,
        redirect: false,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    },
  ],
};

export default config;
