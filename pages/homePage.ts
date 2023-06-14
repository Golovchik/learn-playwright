import { Page } from "@playwright/test";

export default class HomePage {
    constructor(public page: Page) { }

    async clickOnSpecialHotMenu() {
        await this.page.click("(//span[text()[normalize-space()='Special']]/../..)[2]");
    }
}