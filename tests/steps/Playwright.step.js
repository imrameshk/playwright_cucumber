const { Given, When, Then, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { test, chromium, expect } = require("@playwright/test");

const { Page } = require("playwright");

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {

    browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    page = await context.newPage();

});

Given('I navigate to the playwright Website', async () => {

    await page.goto('https://playwright.dev/', { waitUntil: 'networkidle' });

});

When('I check the title of page', async () => {

    await expect(page).toHaveTitle(/Playwright/);
});

When('I click on Get Started button', async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
});


When('I check heading with the name of Installation', async () => {
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

After(async function () {

    await browser.close();

})