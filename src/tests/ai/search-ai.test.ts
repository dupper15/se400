import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test.describe("AI Search", () => {
  test("Go to a page and find info", async ({ page }) => {
    await page.goto("https://se.uit.edu.vn");

    await ai(`Hover over 'Giới thiệu' top nav item`, { page, test });
    await ai('Click on "Sơ đồ tổ chức" section', { page, test });
    const result = await ai(
      'First person in table under "HỘI ĐỒNG KHOA" strong item?',
      { page, test }
    );

    await expect(result).toEqual("TS. Nguyễn Tấn Trần Minh Khang");
  });
});
