const path = require('path');
const { merge } = require('webpack-merge');
const { extractScss } = require('./webpack.parts.js');

const themePath = path.resolve(__dirname, '../public/themes/boodark');

exports.commonConfig = ({ mode }) => (
  merge(
    {
      mode,
      devtool: 'source-map',
      entry: {
        'theme': themePath + '/scss/theme.scss',
      },
      output: {
        filename: '../../../build/[name].js',
        path: themePath + '/css',
      },
    },
    extractScss(),
  )
);
