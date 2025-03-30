import { test, expect } from "@playwright/test";

test("User can login with valid credentials", async ({ page }) => {
    // Mở trang đăng nhập
    await page.goto("http://localhost:5173/login");

    // Nhập email và password
    await page.fill('input[type="email"]', "demo@gmail.com");
    await page.fill('input[type="password"]', "demo");

    // Nhấn nút đăng nhập
    await page.click('button[type="submit"]');

    // Kiểm tra xem có điều hướng về trang chủ không
    await expect(page).toHaveURL("http://localhost:5173/");
});

test("Login fails with empty credentials", async ({ page }) => {
    await page.goto("http://localhost:5173/login");
    
    page.once("dialog", async (dialog) => {
        expect(dialog.message()).toContain("Vui lòng nhập đầy đủ email và mật khẩu!");
        await dialog.dismiss(); // Đóng hộp thoại
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
