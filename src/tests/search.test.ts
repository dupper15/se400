import { test, expect } from "@playwright/test";

test.describe("Manual Search", () => {
  test("Go to a page and find info", async ({ page }) => {
    await page.goto("https://se.uit.edu.vn");

    await page.locator("nav >> text=Giới thiệu").first().hover();
    await page.getByRole("link", { name: "Sơ đồ tổ chức" }).click();
    await page.waitForSelector('strong:has-text("HỘI ĐỒNG KHOA")');

    const resultText = await page
      .locator('strong:has-text("HỘI ĐỒNG KHOA")')
      // Cần biết chính xác cấu trúc table
      .locator("xpath=following::table[1]//tr[2]/td[2]")
      .textContent();

    await expect(resultText?.trim()).toBe("TS. Nguyễn Tấn Trần Minh Khang");
  });
});
