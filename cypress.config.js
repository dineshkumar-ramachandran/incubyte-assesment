const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/",
    // baseUrl: "https://magento.softwaretestingboard.com/",
    testIsolation: false,
  },
});
