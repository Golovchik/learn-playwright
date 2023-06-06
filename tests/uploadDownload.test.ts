import { test } from "@playwright/test";


test("Download files", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", 'Hello world');
    await page.click("#create");
    
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.click("#link-to-download")
    ]);
    //const path = await download.path();
    const fileName = download.suggestedFilename();
    await download.saveAs(fileName);
});

test.only("Upload files", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    //await page.setInputFiles("input[type='file']",
    //    ["uploadItems/Screenshot_1.png",
    //    "uploadItems/Screenshot_2.png"]
    //);

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ]);
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles([
        "uploadItems/Screenshot_1.png",
        "uploadItems/Screenshot_2.png"    
    ]);

    page.waitForTimeout(3000);
});