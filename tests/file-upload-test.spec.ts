import { test, expect} from '@playwright/test';

test('File Upload', async ({page}) => {
  await page.goto('https://practice-automation.com/');

  // Click the button with the text 'File Upload' on the page.
  await page.getByText('File Upload').click();

  // Click the Choose File button.
  await page.click("[id='file-upload']");

  // Set the input file to "./upload/feature.pdf"
  await page.locator("[id='file-upload']").setInputFiles("./upload/feature.pdf");

  // Click the Upload button.
  await page.click("[id='upload-btn']")

  // Verify that the ''Thank you for your message. It has been sent.' is visible.
  await page.getByText('Thank you for your message. It has been sent.').isVisible();
})