import { test } from "@playwright/test";


test("Interact with frames", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log(`№-frames: ${allFrames.length}`);

    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Uladzislau");
    await frame.locator("input[name='lname']").fill("Halouchyk");
    
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='email']").fill("Vlad@gmail.com");

    await frame.locator("input[name='fname']").fill("Vlad");
});