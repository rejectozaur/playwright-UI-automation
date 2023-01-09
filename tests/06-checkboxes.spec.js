import { test, expect } from "@playwright/test";

test("#6 checboxes", async ({ page }) => {
  const checkbox = 'input[type="checkbox"]';

  await page.goto("/checkboxes");

  await page.locator(checkbox).first().check();
  await page.locator(checkbox).last().uncheck();
  expect(await page.locator(checkbox).first().isChecked()).toBeTruthy();
  expect(await page.locator(checkbox).last().isChecked()).toBeFalsy();
});
