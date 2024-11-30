import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.appyflo.com/login', { waitUntil: 'networkidle'} );
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('narasimaan');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('NP').first().click();
  await page.getByTitle('Logout').locator('span').first().click();
});