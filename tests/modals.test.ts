import { Dialog, Locator, expect, test } from "@playwright/test";


test.describe("Handling alerts", () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    });

    test("Single Modal Example", async ({ page }) => {
        await page.click("//button[@data-target='#myModal']");
        await page.click("(//button[text()='Save Changes'])[1]");
    });

  });

