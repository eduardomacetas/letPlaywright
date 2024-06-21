import { test, expect } from "@playwright/test";

test("Handle alert popup and verify message", async ({ page }) => {
  // Navigate to the specified URL.
  await page.goto("https://practice-automation.com/");

  // Click the "Popups" button on the page.
  await page.getByText("Popups").click();

  // Set up a dialog handler to handle the alert popup.
  page.on("dialog", async (dialog) => {
    // Verify the type and message of the dialog.
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("Hi there, pal!");

    // Accept the dialog to close it.
    await dialog.accept();
  });

  // Click the "Alert Popup" button to trigger the alert.
  await page.click("[id='alert']");
});

test("Handle confirm popup and verify cancel action", async ({ page }) => {
  // Navigate to the specified URL.
  await page.goto("https://practice-automation.com/");

  // Click the "Popups" button on the page.
  await page.getByText("Popups").click();

  // Set up a dialog handler to handle the confirm popup.
  page.on("dialog", async (dialog) => {
    // Verify the type and message of the dialog.
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toBe("OK or Cancel, which will it be?");

    // Dismiss the dialog to simulate clicking "Cancel".
    await dialog.dismiss();
  });

  // Click the "Confirm Popup" button to trigger the confirm dialog.
  await page.click("[id='confirm']");

  // Verify that the confirm result is visible and contains the expected text.
  await expect(page.locator("[id='confirmResult']")).toHaveText(
    "Cancel it is!"
  );
});

test("Handle confirm popup and verify OK action", async ({ page }) => {
  // Navigate to the specified URL.
  await page.goto("https://practice-automation.com/");

  // Click the "Popups" button on the page.
  await page.getByText("Popups").click();

  // Set up a dialog handler to handle the confirm popup.
  page.on("dialog", async (dialog) => {
    // Accept the dialog to simulate clicking "OK".
    await dialog.accept();
  });

  // Click the "Confirm Popup" button to trigger the confirm dialog.
  await page.click("[id='confirm']");

  // Verify that the confirm result is visible and contains the expected text.
  await expect(page.locator("[id='confirmResult']")).toHaveText("OK it is!");
});

test("Handle prompt popup and verify cancel action", async ({ page }) => {
  // Navigate to the specified URL.
  await page.goto("https://practice-automation.com/");

  // Click the "Popups" button on the page.
  await page.getByText("Popups").click();

  // Set up a dialog handler to handle the prompt popup.
  page.on("dialog", async (dialog) => {
    // Dismiss the dialog to simulate clicking "Cancel".
    await dialog.dismiss();
  });

  // Click the "Prompt Popup" button to trigger the prompt dialog.
  await page.click("[id='prompt']");

  // Verify that the prompt result is visible and contains the expected text.
  await expect(page.locator("[id='promptResult']")).toHaveText(
    "Fine, be that way..."
  );
});

test("Handle prompt popup and verify OK action with input", async ({
  page,
}) => {
  // Navigate to the specified URL.
  await page.goto("https://practice-automation.com/");

  // Click the "Popups" button on the page.
  await page.getByText("Popups").click();

  // Set up a dialog handler to handle the prompt popup.
  page.on("dialog", async (dialog) => {
    // Accept the dialog with the input "Wardo!" to simulate entering text and clicking "OK".
    await dialog.accept("Wardo");
  });

  // Click the "Prompt Popup" button to trigger the prompt dialog.
  await page.click("[id='prompt']");

  // Verify that the prompt result is visible and contains the expected text.
  await expect(page.locator("[id='promptResult']")).toHaveText(
    "Nice to meet you, Wardo!"
  );
});

test("Verify tooltip visibility and content", async ({ page }) => {
  // Navigate to the specified URL.
  await page.goto("https://practice-automation.com/");

  // Click the "Popups" button on the page.
  await page.getByText("Popups").click();

  // Click to trigger the tooltip.
  await page.getByText("<< click me to see a tooltip >>").click();

  // Verify that the tooltip is visible and contains the expected text.
  await expect(page.locator("[id='myTooltip']")).toBeVisible();
  await expect(page.getByText("Cool text")).toBeVisible();
});
