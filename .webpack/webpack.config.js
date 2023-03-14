const { merge } = require('webpack-merge');
const { commonConfig } = require('./webpack.common.js');
const { productionConfig } = require('./webpack.production.js');
const { developmentConfig } = require('./webpack.development.js');

const getConfig = ({ mode }) => {
  switch (mode) {
    case 'production':
      return merge(commonConfig({ mode }), productionConfig());
    case 'development':
      return merge(commonConfig({ mode }), developmentConfig());
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = (env, options) => getConfig({
  mode: options.mode ?? 'production',
});
