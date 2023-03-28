const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://wyllianyurk77.github.io/plugged-computing-web-front",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
