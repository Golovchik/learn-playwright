import { Dialog, Locator, expect, test } from "@playwright/test";


test.describe("Select Dropdown List", () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    });

    test("Select List Demo", async ({ page }) => {
        await page.selectOption("#select-demo", {
            //label: "Tuesday",
            //value: "Friday",
            index: 5
        });
        await page.waitForTimeout(3000);
    });

  
    test('Multi Select List Demo', async ({ page }) => {
        await page.selectOption("#multi-select", [{
        label: "Florida"
        },
        {
            value: "Ohio"
        },
        {
            index: 7
        }]);
        await page.waitForTimeout(3000);
    });
 
  });

