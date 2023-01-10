import { test, expect } from "@playwright/test";
import { logIn } from "../support/helpers/customMethods";

test.describe("#21 user", () => {
  test("fails to log in", async ({ page }) => {
    logIn("wrong username", "wrong password");
    await expect(page.getByText("Your username is invalid!")).toBeVisible;
  });

  test.skip("successfully logs in and out", async ({ page }) => {
    logIn("tomsmith", "SuperSecretPassword!");
    await expect(page.getByText("You logged into a secure area!")).toBeVisible;
    await page.getByRole("link", { name: "Logout" }).click(); // fails because of https://github.com/microsoft/playwright/issues/981, works when chromium.launch is excluded

    await page.getByText("You logged out of the secure area! ×").click();
  });
});
