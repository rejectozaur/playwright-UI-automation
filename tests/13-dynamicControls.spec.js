import { test, expect } from "@playwright/test";

test("#13 dynamic controls", async ({ page }) => {
  const btn = "button";
  const checkbox = "#checkbox";
  const loading = "#loading";
  const img = "img";
  const textbox = "textbox";

  await page.goto("/dynamic_controls");

  await expect(page.locator(checkbox)).toBeVisible();
  await page.getByRole(btn, { name: "Remove" }).click();
  await expect(page.locator(loading).getByRole(img)).toBeVisible();
  await page.waitForTimeout(5000);
  await expect(page.getByText("It's gone!")).toBeVisible();
  await page.getByRole(btn, { name: "Add" }).click();
  await expect(page.locator(loading).getByRole(img)).toBeVisible();
  await expect(page.getByText("It's back!")).toBeVisible();
  await expect(page.locator(checkbox)).toBeVisible();

  await expect(page.getByRole(textbox)).toBeDisabled();
  await page.getByRole(btn, { name: "Enable" }).click();
  await expect(page.locator("#input-example").getByRole(img)).toBeVisible();
  await page.waitForTimeout(5000);
  const el = page.getByRole(textbox);
  await el.fill("test value in the text box");
  await el.press("Enter");
  await expect(page.getByRole(textbox)).toBeDisabled();
});
