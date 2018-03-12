// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  plugins: [
    // your custom plugins
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })
  ],
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        })
      }
    ],
  },
};
