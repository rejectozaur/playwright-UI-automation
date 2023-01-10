// @ts-check
import { expect, chromium } from "@playwright/test";

export async function basicAuth(browser, username, password, url, message) {
  const context = await browser.newContext({
    httpCredentials: {
      username: username,
      password: password,
    },
  });
  const page = await context.newPage();
  await page.goto(url);
  await expect(page.locator(`text=${message}`)).toBeVisible();
}

export async function logIn(username, password) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("/login");
  await page.getByLabel("Username").fill(username);
  await page.getByLabel("Password").fill(password);
  await page.getByRole("button", { name: " Login" }).click();
}
