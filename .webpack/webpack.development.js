exports.developmentConfig = () => ({
  stats: {
    loggingDebug: ["sass-loader"],
    modules: false,
    relatedAssets: true,
  },
  name: 'CSS development',
  // devtool: 'source-map',
});
