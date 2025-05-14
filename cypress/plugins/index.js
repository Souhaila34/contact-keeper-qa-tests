const wp = require('@cypress/webpack-batteries-included-preprocessor');

module.exports = (on, config) => {
  on('file:preprocessor', wp());
  return config;
};
