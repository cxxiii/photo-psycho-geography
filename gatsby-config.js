module.exports = {
  siteMetadata: {
    title: 'Katja Schmelzer',
    description: "A website showcasing Katja's photograhpy",
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `assets`,
        name: `assets`,
      },
    },
  ],
}
