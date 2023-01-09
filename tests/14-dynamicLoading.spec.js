import { test, expect } from "@playwright/test";

const link = "link";
const string = "Example 1: Element on page that is hidden";
const string2 = "Example 2: Element rendered after the fact";
const url = "/dynamic_loading";
const btn = "button";
const loading = "#loading";
const img = "img";
const heading = "heading";

test.describe("#14 dynamic loading", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dynamic_loading");
  });

  test("example 1", async ({ page }) => {
    await page.getByRole(link, { name: string }).click();
    await expect(page).toHaveURL(`${url}/1`);
    await page.getByRole(btn, { name: "Start" }).click();
    await expect(page.getByText("Loading...")).toBeVisible();
    await expect(page.locator(loading).getByRole(img)).toBeVisible();
    await expect(
      page.getByRole(heading, { name: "Hello World!" })
    ).toBeVisible();
  });

  test("example 2", async ({ page }) => {
    await page.getByRole(link, { name: string2 }).click();
    await expect(page).toHaveURL(`${url}/2`);
    await page.getByRole(btn, { name: "Start" }).click();
    await expect(page.getByText("Loading...")).toBeVisible();
    await expect(page.locator(loading).getByRole(img)).toBeVisible();
    await expect(
      page.getByRole(heading, { name: "Hello World!" })
    ).toBeVisible();
  });
});
