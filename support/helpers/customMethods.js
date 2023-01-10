// @ts-check
import { request, expect } from "@playwright/test";

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

