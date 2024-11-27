const { Given, When, Then } = require(`@cucumber/cucumber`);
const { expect } = require('chai');

Given(/^I am on the login page$/, async function () {
    await this.page.goto('https://www.saucedemo.com/');
});

When(/^I enter valid credentials$/, async function () {
    await this.page.fill(`//input[@id="user-name"]`, 'visual_user');
    await this.page.fill(`//input[@id="password"]`, 'secret_sauce');
    await this.page.click(`//input[@id="login-button"]`);
});

Then(/^I should see the dashboard$/, async function () {
    const logoText = await this.page.textContent(`//div[normalize-space(text())='Swag Labs']`);
    console.log(logoText);
    expect(logoText).to.contain('Swag Labs');
});
