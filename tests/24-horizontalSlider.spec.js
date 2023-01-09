import { test, expect } from "@playwright/test";

test("#24 horizontal slider", async ({ page }) => {
  await page.goto("/horizontal_slider");

  await page.getByRole("slider").press("ArrowRight");
  await page.locator("html").focus();
  await expect(page.getByText("0.5")).toBeVisible();
});
