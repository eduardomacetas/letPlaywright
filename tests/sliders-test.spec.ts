import { expect, test } from "@playwright/test";

test("Move slider", async ({ page }) => {
  // Navigate to the specified URL.
  await page.goto("https://practice-automation.com/");

  // Click the button with the text 'JavaScript Delays' on the page.
  await page.getByText("Sliders").click();

  // Locate the slider element.
  const slider = await page.locator("[id='slideMe']");
  // Calculate the slider's offset width.
  const sliderOffsetWidth = await slider.evaluate((el) => {
    return el.getBoundingClientRect().width;
  });

  // Simulate dragging the slider.
  await slider.hover({ force: true, position: { x: 0, y: 0 } });
  await page.mouse.down();
  await slider.hover({ force: true, position: { x: sliderOffsetWidth, y: 0 } });
  await page.mouse.up();

  // Assert that the value element displays '100'.
  await expect(page.locator("[id='value']")).toHaveText("100");
});
