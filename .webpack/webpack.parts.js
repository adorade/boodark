const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RtlCssPlugin = require('rtlcss-webpack-plugin');

exports.extractScss = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Extracts CSS into separate files
          MiniCssExtractPlugin.loader,
          // Interprets `@import` and `url()` like `import/require()` and will resolve them
          { loader: 'css-loader', options: { url: false } },
          // Loader for webpack to process CSS with PostCSS
          { loader: 'postcss-loader', options: {
            postcssOptions: {
              plugins: [ autoprefixer() ],
            },
          }},
          // Loads a SASS/SCSS file and compiles it to CSS
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new RtlCssPlugin({
      filename: '[name].rtl.css',
    }),
  ],
});
