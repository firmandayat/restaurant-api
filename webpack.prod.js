/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) =>
            url.href.startsWith('https://restaurant-api.dicoding.dev'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'resto-api',
          },
        },
        {
          urlPattern: ({ url }) =>
            url.href.startsWith(
              'https://restaurant-api.dicoding.dev/images/medium/'
            ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'resto-image-api',
          },
        },
      ],
    }),
  ],
});
