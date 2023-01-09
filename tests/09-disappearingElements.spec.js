import { test, expect } from "@playwright/test";

test("#9 disappearing elements", async ({ page }) => {
  await page.goto("/disappearing_elements");

  let btns = ["Home", "About", "Contact Us", "Portfolio"];

  for (let reload = 1; reload <= 6; reload++) {
    await page.reload();
    console.log(`#${reload}/6 - page reload in order `);

    for (let i = 0; i < btns.length; i++) {
      console.log(`this inner loop runs now for the: "${btns[i]}"`);
      await expect(page.getByRole("link", { name: btns[i] })).toBeVisible();
    }
    console.log("\n");
    await expect
      .soft(page.getByRole("link", { name: "Gallery" }))
      .toBeVisible();
  }
});
