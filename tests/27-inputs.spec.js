import { test, expect } from "@playwright/test";

test("#27 input", async ({ page }) => {
  const input = "spinbutton";

  await page.goto("/inputs");

  await page.getByRole(input).type("1");
  await expect(page.getByRole(input)).toHaveValue("1");
  await page.getByRole(input).clear();
  await page.getByRole(input).type("-2");
  await expect(page.getByRole(input)).toHaveValue("-2");
});
