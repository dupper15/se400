import test, { expect } from "@playwright/test";

test("UI Test: Check login button style", async ({ page }) => {
    await page.goto("http://localhost:5173/login");

    const loginButton = page.locator('button[type="submit"]');
    await expect(loginButton).toBeVisible();

    await expect(loginButton).toHaveCSS("background-color", "rgb(59, 130, 246)");

    await expect(loginButton).toHaveText("Login");
});
