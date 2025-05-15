import { test, expect } from "@playwright/test";

test("User can login with valid credentials", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.fill('input[type="email"]', "demo@gmail.com");
  await page.fill('input[type="password"]', "demo");
  await page.click('button[type="submit"]');
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

  await page.click('button[type="submit"]');
});

test("Login fails with incorrect credentials", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.fill('input[type="email"]', "wrong@gmail.com");
  await page.fill('input[type="password"]', "wrongpassword");

  await page.click('button[type="submit"]');

  // Kiểm tra xem có ở lại trang login không
  await expect(page).toHaveURL("http://localhost:5173/login");
});
