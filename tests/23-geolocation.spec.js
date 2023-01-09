import { test } from "@playwright/test";

test("#23 geolocation", async ({ page, context }) => {
  await page.goto("/geolocation");

  await page.getByRole("button", { name: "Where am I?" }).click();
  const coords = { latitude: 50.9245541, longitude: 5.2435062 };
  context.setGeolocation(coords);
});
