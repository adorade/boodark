const path = require('path');
const { merge } = require('webpack-merge');
const {
  extractScss, cleanDistFolders,
} = require('./webpack.parts.js');

exports.commonConfig = ({ mode }) => (
  merge(
    {
      mode,
      devtool: 'source-map',
      entry: {
        theme: './themes/boodark/scss/theme.scss',
      },
      output: {
        filename: '../../../build/[name].js',
        path: path.resolve(__dirname, '../themes/boodark/css'),
      },
    },
    extractScss(),
    cleanDistFolders(),
  )
);
