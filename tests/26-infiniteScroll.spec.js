import { test, expect } from "@playwright/test";

test("#26 infinite scroll", async ({ page }) => {
  const textParagraph = ".jscroll-added >> nth=5";

  await page.goto("/infinite_scroll");

  await page.locator("body").click();
  await expect(page.locator(textParagraph)).not.toBeVisible();
  for (let i = 0; i < 5; i++) {
    page.mouse.wheel(0, 15000);
    await page.waitForTimeout(1000);
  }
  await expect(page.locator(textParagraph)).toBeVisible();
});
