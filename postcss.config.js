module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['app/styles/_mixins.css', 'app/styles/_theme.css'],
    },
    'postcss-preset-env': {
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
        'nesting-rules': true,
      },
    },
    'postcss-nested': {},
    'postcss-custom-media': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
