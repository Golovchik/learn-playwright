import { expect, test } from "@playwright/test";


test.skip("Interaction with inputs", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");

    console.log("Before entering data: " + await messageInput.inputValue());
    await messageInput.type("Hi Vlad");
    console.log("After entering data: " + await messageInput.inputValue());

});

test.only("Sum", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    
    const sum1Input = page.locator("#sum1");
    const sum2Input = page.locator("#sum2");
    const getValueBtn = page.locator("//button[text()='Get values']");
    const result = page.locator("#addmessage");

    let num1 = 111;
    let num2 = 222;
    let expectedResult = num1 + num2;

    await sum1Input.fill("" + num1);
    await sum2Input.type("" + num2);
    await getValueBtn.click();

    console.log(await result.textContent());
    expect(result).toHaveText("" + expectedResult);

});

test("Checbox", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    
    const singleCheckBox = page.locator("id=isAgeSelected");
   
    expect(singleCheckBox).not.toBeChecked();
    await singleCheckBox.check();
    expect(singleCheckBox).toBeChecked();

});