import { chromium, test } from "@playwright/test";


test("Login test demo", async () => {
    // 'chromium' or 'firefox' or 'webkit'.  
    const browser = await chromium.launch({
        headless: false,
    });  
    // Create a new incognito browser context.
    const context = await browser.newContext();
    // Create a new page in a pristine context.
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");

    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    //await page.click("text=Login");
    await page.click("'Login'");

    await page.fill("input[name='email']", 'koushik350@gmail.com');
    await page.fill("input[name='password']", 'Pass123$');
    await page.click("input[value='Login']");

    await page.waitForTimeout(5000);

    // Gracefully close up everything
    //await context.close();
    //await browser.close();
    
})