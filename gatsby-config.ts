import { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Trainee Fitness`,
    description: "Get your goals at Trainee fitness",
    url: "https://traineefitness.com",
    author: "Markus Persson",
    keywords: "training, workout, exercise, diet",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "9iO8-fU5qJsSsxEJL4oNdHgsqS1YfjiWRjUAeJJ6FGY",
        spaceId: "w27ngic6u4kz",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-smoothscroll`,
  ],
};

export default config;
