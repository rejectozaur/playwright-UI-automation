import { test } from "@playwright/test";
import { basicAuth } from "../support/helpers/customMethods";

test.describe("#3 test basic auth's", () => {
  test("failure", async ({ browser }) => {
    await basicAuth(
      browser,
      "invaliduser",
      "invalidpassword",
      "/basic_auth",
      "Not authorized"
    );
  });

  test("success", async ({ browser }) => {
    await basicAuth(
      browser,
      "admin",
      "admin",
      "/basic_auth",
      "Congratulations!"
    );
  });
});
