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

export async function interactWithJSAlert(
  alertType,
  decision,
  expectedResultText
) {
  const dialog = "dialog";

  const browser = await chromium.launch(); // double browser launch caused by issue: https://github.com/microsoft/playwright/issues/981
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("/javascript_alerts");
  page.on(dialog, async (dialog) => {
    expect(dialog.message()).toEqual(`I am a JS ${alertType}`);
    if (alertType != "prompt" && decision == "accept") {
      await dialog.accept();
    } else if (alertType != "Alert" && decision == "dismiss") {
      await dialog.dismiss();
    } else if (alertType == "prompt" && decision == "accept") {
      await dialog.accept("hi there!");
    }
  });
  await page.locator(`text=Click for JS ${alertType}`).click();
  await expect(page.locator("#result")).toHaveText(expectedResultText);
}

export async function checkValueOfEachKey(arr, result, inputField) {
  for (const key in arr) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.keyboard.press(key);
    await expect(page.locator(result)).toHaveText(`You entered: ${arr[key]}`);
    await page.locator(inputField).clear();
  }
}
