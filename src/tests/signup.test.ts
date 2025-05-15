import { test, expect } from "@playwright/test";

test("Sign up", async ({ page }) => {
  await page.goto("http://localhost:5173/signup");

  await page.getByPlaceholder("Enter your email").fill("abcd@gmail.com");
  await page.getByPlaceholder("Enter your password").fill("abc123");
  await page.getByPlaceholder("Confirm your password").fill("abc123");
  /* Có thể dài hơn nếu form có nhiều field*/
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL("http://localhost:5173/");
});
