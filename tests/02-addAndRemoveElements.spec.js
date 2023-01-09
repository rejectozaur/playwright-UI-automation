import { test, expect } from "@playwright/test";

test("#2 add and remove elements", async ({ page }) => {
  const deleteBtn = 'text="Delete"';

  await page.goto("/add_remove_elements/");

  await expect(page.locator(deleteBtn)).toHaveCount(0);
  await page.locator('text="Add Element"').dblclick();
  await expect(page.locator(deleteBtn)).toHaveCount(2);
  await page.locator(deleteBtn + " >> nth=1").click();
  await expect(page.locator(deleteBtn)).toHaveCount(1);
});
