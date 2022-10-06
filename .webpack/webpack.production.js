const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

exports.productionConfig = () => ({
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
    hints: 'error',
    maxAssetSize: 270000,
    maxEntrypointSize: 550000,
  },
});
