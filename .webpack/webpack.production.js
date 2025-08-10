const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

exports.productionConfig = () => ({
  name: 'CSS Production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cssoMinify,
        minimizerOptions: {
          forceMediaMerge: true,
          comments: false,
        },
      }),
    ],
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 290000,
    maxEntrypointSize: 580000,
  },
});
