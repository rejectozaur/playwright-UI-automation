import { test, expect } from "@playwright/test";

test("#7 context menu", async ({ page }) => {
  await page.goto("/context_menu");

  await page.locator("#hot-spot").click({ button: "right" });
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
    expect(page.getByText(`${dialog.message}`)).not.toBeVisible();
  });

  // await page.getByText('Back').hover(); // unable to test clicking options on contextmenu since playwrigt doesn't support yet operations on it (convo from Aug '22)
});
