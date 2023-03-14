const path = require('path');
const { merge } = require('webpack-merge');
const { extractScss } = require('./webpack.parts.js');

const themePath = path.resolve(__dirname, '../themes/boodark');

exports.commonConfig = ({ mode }) => (
  merge(
    {
      mode,
      devtool: 'source-map',
      entry: {
        'theme': themePath + '/scss/theme.scss',
        'theme-nord': themePath + '/scss/theme-nord.scss',
        'theme-teal': themePath + '/scss/theme-teal.scss',
        'theme-orange': themePath + '/scss/theme-orange.scss',
      },
      output: {
        filename: '../../../build/[name].js',
        path: themePath + '/css',
      },
    },
    extractScss(),
  )
);
