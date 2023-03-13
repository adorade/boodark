const path = require('path');
const { merge } = require('webpack-merge');
const { extractScss } = require('./webpack.parts.js');

const publicPath = path.resolve(__dirname, '../public/themes/boodark');

exports.commonConfig = ({ mode }) => (
  merge(
    {
      mode,
      devtool: 'source-map',
      entry: {
        'theme': publicPath + '/scss/theme.scss',
        'theme-nord': publicPath + '/scss/theme-nord.scss',
        'theme-teal': publicPath + '/scss/theme-teal.scss',
        'theme-orange': publicPath + '/scss/theme-orange.scss',
      },
      output: {
        filename: '../../../build/[name].js',
        path: publicPath + '/css',
      },
    },
    extractScss(),
  )
);
