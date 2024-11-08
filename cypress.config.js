const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.booking.com',
    specPattern: 'cypress/integration/features/**/*.feature',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,

    setupNodeEvents(on, config) {
      let store = {};

      on('task', {
        setValue({ key, value }) {
          store[key] = value;
          return null;
        },
        getValue(key) {
          return store[key] || null;
        },
      });

      on('file:preprocessor', cucumber());

      return config;
    },
  }
});
