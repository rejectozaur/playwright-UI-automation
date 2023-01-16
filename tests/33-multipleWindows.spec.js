import { expect, test } from "@playwright/test";

test("#33 - verify 2nd tab is opened", async ({ context }) => {
  const page = await context.newPage();
  await page.goto("/windows");
  await expect(page.locator("h3")).toHaveText("Opening a new window");

  const [secondTab] = await Promise.all([
    context.waitForEvent("page"),
    await page.click('a[href="/windows/new"]'),
  ]);

  await expect(secondTab.locator("h3")).toHaveText("New Window");
});
