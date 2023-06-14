import { Page } from "@playwright/test";

export default class SpecialHotPage {
    constructor(public page: Page) { }

    async addFirstProductToTheCart() {
        await this.page.click("(//a[@class='nav-link'])[1]");
        await this.page.hover("//div[@class='image']/a", {
            strict: false
        });
        await this.page.locator("//button[@title='Add to Cart']")
            .nth(0).click();    
    }  
    async isToastVisible() {
        const toast = this.page.locator("//a[contains(.,'View Cart')]");
        await toast.scrollIntoViewIfNeeded();
        await toast.waitFor({state: "visible"});
        return toast
    }
}