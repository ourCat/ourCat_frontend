const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../docs/**/*.stories.mdx', '../docs/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
