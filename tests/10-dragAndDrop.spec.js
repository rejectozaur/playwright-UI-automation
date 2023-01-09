import { test, expect } from "@playwright/test";

test("#10 drag and drop", async ({ page }) => {
  const columnA = "#column-a";
  const columnB = "#column-b";

  await page.goto("/drag_and_drop");

  await expect(page.locator(columnA)).toHaveText("A");
  await expect(page.locator(columnB)).toHaveText("B");
  await page.locator(columnA).dragTo(page.locator(columnB));
  await expect(page.locator(columnA)).toHaveText("B");
  await expect(page.locator(columnB)).toHaveText("A");
});
