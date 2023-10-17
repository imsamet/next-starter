const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../components'),
      '@/elements': path.resolve(__dirname, '../elements'),
      '@/constants': path.resolve(__dirname, '../constants'),
      '/img': path.resolve(__dirname, '../public'),
      '/assets': path.resolve(__dirname, '../public/assets'),
    };
    return config;
  },
};
