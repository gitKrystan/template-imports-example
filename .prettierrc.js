'use strict';

module.exports = {
  plugins: ['prettier-plugin-ember-template-tag'],
  singleQuote: true,
  templateSingleQuote: false,
  overrides: [
    {
      files: '*.{gjs,gts}',
      options: {
        parser: 'ember-template-tag',
      },
    },
    {
      files: '*.{html,hbs}',
      options: {
        singleQuote: false,
      },
    },
  ],
};
