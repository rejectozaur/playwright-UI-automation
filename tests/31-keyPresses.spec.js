import { test, expect } from "@playwright/test";
import { checkValueOfEachKey } from "../support/helpers/customMethods";

test.describe("#31 test key presses:", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/key_presses");
  });

  const inputField = "#target";
  const result = "#result";

  test("small letter", async ({ page }) => {
    await page.keyboard.press("a");
    await expect(page.locator(result)).toHaveText("You entered: A"); // this is how the app works
    await page.locator(inputField).clear();
  });

  test("capital letter", async () => {
    const pairs = {
      "Shift+A": "A",
      "CapsLock+B": "B",
    };

    checkValueOfEachKey(pairs, result, inputField);
  });

  test("number", async ({ page }) => {
    await page.locator(inputField).type("1");
    await expect(page.locator(result)).toHaveText("You entered: 1");
    await page.locator(inputField).clear();
  });

  test("special chars", async ({ page }) => {
    const pairs = {
      "[": "OPEN_BRACKET",
      "]": "CLOSE_BRACKET",
      ";": "", // app lacks name for it; the same case is for "-" and "="
      "'": "QUOTE",
      ",": "COMMA",
      ".": "PERIOD",
      "/": "SLASH",
      "`": "BACK_QUOTE",
      "-": "",
      "=": "",
      "Shift+1": "1", // The app lists the last pressed key, so "!" is not expected
      "Alt+a": "A",
    };

    checkValueOfEachKey(pairs, result, inputField);
  });

  test("whitespaces", async () => {
    const pairs = {
      Backspace: "BACK_SPACE",
      Space: "SPACE",
    };

    checkValueOfEachKey(pairs, result, inputField);
  });

  test("arrows", async () => {
    const pairs = {
      ArrowUp: "UP",
      ArrowRight: "RIGHT",
      ArrowLeft: "LEFT",
      ArrowDown: "DOWN",
    };

    checkValueOfEachKey(pairs, result, inputField);
  });

  test("modification keys", async () => {
    const pairs = {
      Control: "CONTROL",
      Alt: "ALT",
      Shift: "SHIFT",
      Tab: "TAB",
      Meta: "WIN",
      CapsLock: "CAPS_LOCK",
    };

    checkValueOfEachKey(pairs, result, inputField);
  });
});
