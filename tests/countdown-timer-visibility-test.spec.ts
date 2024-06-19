import { test, expect } from "@playwright/test";

/*
Test scenario: Verifying the Countdown Timer Functionality.
This test ensures that when a user clicks the 'Start Countdown' button,
a countdown timer begins and displays the correct countdown sequence.
*/

test("Countdown Timer Visibility Test", async ({ page }) => {
  // Navigate to the specified URL.
  await page.goto("https://practice-automation.com/");

  // Click the button with the text 'JavaScript Delays' on the page.
  await page.getByText("JavaScript Delays").click();

  // Click the 'Start' button using its ID.
  await page.click("[id='start']");

  // Wait for the message "Liftoff!" to be displayed
  await expect(page.getByRole("textbox")).toHaveValue("Liftoff!", {
    timeout: 15000,
  });
});
