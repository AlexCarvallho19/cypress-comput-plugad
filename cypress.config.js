const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 768,
    viewportWidth: 1366,
    defaultCommandTimeout: 60000,
    baseUrl: "https://wyllianyurk77.github.io/plugged-computing-web-front",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
