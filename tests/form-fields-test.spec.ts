import { test, expect } from '@playwright/test';

/*
Test Scenario: Form Fields
*/

test('Form Fields', async ({page}) => {
  // Navigate to the specified URL.
  await page.goto('https://practice-automation.com/');

  // Click the button with the text 'Form Fields' on the page.
  await page.getByText('Form Fields').click();

  // Fill in the name field with 'Wardo'
  await page.locator("[id='name']").fill('Wardo');
  // Check the checkboxes for options 'drink1' (Water) and 'color2' (Blue)
  await page.check("[id='drink1']");
  await page.check("[id='color2']");
  // Select the 'yes' option in the siblings field
  const element = page.locator("[id='siblings']");
  await element.selectOption({value: 'yes'});
  // Fill in the email field with 'user@test.com'
  await page.locator("[id='email']").fill('user@test.com');
  // Fill in the message field with 'Working on it'
  await page.locator("[id='message']").fill('Working on it');

  // Click the submit button
  await page.click("[id='submit-btn']");

  


  // Event listener for dialog boxes that appear after form submission.
  page.on('dialog', async(dialog) => {
    // Check if the dialog is an 'alert' type and contains the expected message.
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('Message received!');

    // Accept the dialog to close it.
    await dialog.accept();
  })
})