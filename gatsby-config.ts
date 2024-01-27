import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [

    {
      resolve: "gatsby-remark-better-embed-video",
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77.
        height: 400, // Optional: Overrides optional.ratio.
        related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, // Optional: Disable insertion of <style> border: 0.
        showInfo: false // Optional: Hides video title and player actions.
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`pl`, `en`, `de`, `fr`,],
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
        quality: 100,
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-image',
      options: {
        // set the default image quality here
        quality: 100,
      },
    },

  ],
};

export default config;
