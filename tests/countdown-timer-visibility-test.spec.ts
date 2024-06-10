import { test, expect } from '@playwright/test';

test('Countdown Timer Visibility Test', async ({page}) => {
  // Navigate to the specified URL.
  await page.goto('https://practice-automation.com/');
  // await expect(page.getByRole('heading', {name: 'Welcome to your software automation practice website!'})).toBeVisible();

  // Click the button with the text 'JavaScript Delays' on the page.
  await page.getByText('JavaScript Delays').click();

  // Click the 'Start' button using its ID.
  // await page.getByText('Start').click();
  await page.click("[id='start']");

  // Assert that the text 'Liftoff!' is visible on the page.
  // await page.getByText('Liftoff!').isVisible();
  await page.locator("[id='delay']").isVisible();
})