const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  target: 'serverless',
  // eslint-disable-next-line no-unused-vars
  webpack(config, { dev, isServer }) {
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    );

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });

    return config;
  }
});
