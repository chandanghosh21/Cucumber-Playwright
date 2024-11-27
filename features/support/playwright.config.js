const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        headless: false, // Set to `true` to run tests in headless mode
        viewport: { width: 1280, height: 720 },
        actionTimeout: 300000,
    },
});
