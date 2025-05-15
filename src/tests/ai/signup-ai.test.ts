import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test("Sign up AI", async ({ page }) => {
  await page.goto("http://localhost:5173/signup");

  await ai("Enter realistic values into the fields", { page, test });
  await ai("Click sign up button", { page, test });

  await expect(page).toHaveURL("http://localhost:5173/");
});
