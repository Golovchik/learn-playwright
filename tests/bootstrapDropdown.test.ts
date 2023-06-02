import { Dialog, Locator, expect, test } from "@playwright/test";


test.describe("Jquery Dropdown Search Demo", () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    });

    test("Single Select - Search and Select country", async ({ page }) => {
        await selectCountry("India");
        await selectCountry("Japan");

        async function selectCountry(countryName: string) {
            await page.click("#country+span");
            await page.locator("ul#select2-country-results")
                .locator("li", {
                    hasText: countryName
                }).click();
        }
    });

 
  });



