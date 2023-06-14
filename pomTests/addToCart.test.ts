import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHotPage from "../pages/specialHotPage";

const email = "Vlad@gmail.com";
const password = "Vlad123";

test.describe("Page Object test demo", async ()=> {
    test("Register test_01", async ({ page, baseURL }) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Vlad");
        await register.enterLastName("Vlad");
        await register.enterEmail(email);
        await register.enterTelephone("123456789");
        await register.enterPassword(password);
        await register.enterConfirmPassword("Vlad123");
    
        expect(await register.isSubscribeChecked()).toBeChecked();
        await register.clickTermandCondition();
        await register.clickContinueToRegister();
    });
    
    test("Login test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        expect(await page.title()).toBe("My Account");
    });
    
    test("Login test_03", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const home = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        await home.clickOnSpecialHotMenu();
        await special.addFirstProductToTheCart();
        const isCartVisible = await special.isToastVisible();
        expect(isCartVisible).toBeVisible();
    });
})