import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test("User can login with valid credentials", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await ai(
    'Enter "demo@gmail.com" into the email field and "demo" into the password field',
    { page, test }
  );
  await ai("Click on the login button", { page, test });
  await expect(page).toHaveURL("http://localhost:5173/");
});

test("Login fails with empty credentials", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain(
      "Vui lòng nhập đầy đủ email và mật khẩu!"
    );
    await dialog.dismiss();
  });
  await ai("Click on the login button", { page, test });
});

test("Login fails with incorrect credentials", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await ai('Enter "wrong@gmail.com" into the email field', { page, test });
  await ai('Enter "wrongpassword" into the password field', { page, test });
  await ai("Click on the login button", { page, test });
  await expect(page).toHaveURL("http://localhost:5173/login");
});
