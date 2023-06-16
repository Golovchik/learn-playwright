import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/addToCart-test-data.json"

test.describe("Page Object test demo", async ()=> {
    test("Register test_01", async ({ page, baseURL, registerPage }) => {
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstName);
        await registerPage.enterLastName(data.lastName);
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone(data.phoneNumber);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
    
        expect(await registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermandCondition();
        await registerPage.clickContinueToRegister();
    });
    
    test("Login test_02", async ({ page, baseURL, loginPage }) => {
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);
        expect(await page.title()).toBe("My Account");
    });
    
    test("Login test_03", async ({ page, baseURL, loginPage, homePage, specialPage }) => {
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);
        await homePage.clickOnSpecialHotMenu();
        await specialPage.addFirstProductToTheCart();
        const isCartVisible = await specialPage.isToastVisible();
        expect(isCartVisible).toBeVisible();
    });
})