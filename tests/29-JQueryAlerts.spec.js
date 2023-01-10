import { test } from "@playwright/test";
import { interactWithJSAlert } from "../support/helpers/customMethods";

test.describe("#29 test javascript alerts: ", () => {
  test("JS alert - triggers alert and clicks OK", async ({ page }) => {
    await interactWithJSAlert(
      "Alert",
      "accept",
      "You successfully clicked an alert"
    );
  });

  test("JS Confirm - triggers and cancels", async () => {
    await interactWithJSAlert("Confirm", "dismiss", "You clicked: Cancel");
  });

  test("JS Confirm - triggers and confirms", async () => {
    await interactWithJSAlert("Confirm", "accept", "You clicked: Ok");
  });

  test("JS Prompt - triggers and cancels", async () => {
    await interactWithJSAlert("prompt", "dismiss", "You entered: null");
  });

  test("JS Prompt - triggers, enters value and confirms", async () => {
    await interactWithJSAlert("prompt", "accept", "You entered: hi there!");
  });
});
