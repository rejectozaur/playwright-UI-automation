import { test, expect } from "@playwright/test";

test("#25 hovers", async ({ page }) => {
  const heading = "heading";
  const userName = "name: user1";
  const link = "link";
  const string = "View profile";

  await page.goto("/hovers");

  await expect(page.getByRole(heading, { name: userName })).not.toBeVisible(); // testing just 1 of 3
  await expect(page.getByRole(link, { name: string })).not.toBeVisible();
  await page.getByRole("img", { name: "User Avatar" }).first().hover();
  await expect(page.getByRole(heading, { name: userName })).toBeVisible();
  await expect(page.getByRole(link, { name: string })).toBeVisible();
});
