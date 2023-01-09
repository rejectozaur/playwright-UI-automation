import { test, expect } from "@playwright/test";

test("#15 entry ad", async ({ page }) => {
  const modal = "#modal";

  await page.goto("/entry_ad");
  await page.locator(modal).getByText("Close").click();
  await expect(page.locator(modal)).not.toBeVisible();
  for (let i = 0; i <= 2; i++) {
    await page.reload();
    await expect(page.locator(modal)).not.toBeVisible();
  }
  await page.getByRole("link", { name: "click here" }).click();
  await expect(page.locator(modal)).toBeVisible(); // will fail, cause the modal doesn't always reappear, it's a bug in the app; the scenarios does its job
});
