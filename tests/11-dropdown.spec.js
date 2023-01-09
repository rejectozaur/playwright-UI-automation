import { test, expect } from "@playwright/test";

test("#11 dropdown", async ({ page }) => {
  await page.goto("/dropdown");

  await page.locator("#dropdown").selectOption("1");
  await expect(page.locator('option[selected="selected"]')).toHaveText(
    "Option 1"
  );
});
