const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

exports.productionConfig = () => ({
  name: 'CSS production',
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
    maxAssetSize: 320000,
    maxEntrypointSize: 640000,
  },
});
