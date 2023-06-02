import { Dialog, Locator, expect, test } from "@playwright/test";


test.describe("Handling alerts", () => {
    let itemsClickMeBtn: Locator;

    async function clickItemClickMeBtn(index: number): Promise<void> {
        await itemsClickMeBtn.nth(index).click();    
    }

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
        itemsClickMeBtn = page.locator("button:has-text('Click Me')");
    });

    test("Java Script Alert Box", async ({ page }) => {
        page.on("dialog", async (alert: Dialog) => {
            const text = alert.message();
            console.log(text);
            await alert.accept();
        }); 
        await clickItemClickMeBtn(0);
    });

    test("Java Script Confirm Box", async ({ page }) => {
        page.on("dialog", async (alert: Dialog) => {
            const text = alert.message();
            console.log(text);
            await alert.dismiss();
        }); 
        await clickItemClickMeBtn(1);

        expect(page.locator("id=confirm-demo")).toContainText("Cancel!");
    });

    test("Java Script Prompt Box", async ({ page }) => {
        page.on("dialog", async (alert: Dialog) => {
            const text = alert.defaultValue();
            console.log(text);
            await alert.accept("Hi Vlad");
        }); 
        await clickItemClickMeBtn(2);

        expect(page.locator("id=prompt-demo")).toContainText("'Hi Vlad'");
    });

  });

