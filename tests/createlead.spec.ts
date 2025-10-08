import { chromium, test } from "@playwright/test";

test("Test to create a lead", async({page}) => { 
 const pt =  await page.goto("http://leaftaps.com/opentaps/control/main");
   await page.locator(`#username`).fill('Demosalesmanager');
   await page.locator(`#password`).fill('crmsfa');
   await page.locator(`.decorativeSubmit`).click();
   //await page.waitForTimeout(3000)
   await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
 //  await page.waitForTimeout(3000)
   await page.locator(`//a[contains(text(),'Create Lead')]`).click();
   await page.locator(`#createLeadForm_companyName`).fill('Google');
   await page.locator(`#createLeadForm_firstName`).fill('Usha');
   await page.locator(`#createLeadForm_lastName`).fill('Thangavelu');
   await page.locator(`#createLeadForm_personalTitle`).fill('Mrs');
   await page.locator(`#createLeadForm_generalProfTitle`).fill('playwrighttest');
   await page.locator(`#createLeadForm_annualRevenue`).fill('400000');
   await page.locator(`#createLeadForm_departmentName`).fill('IT');
   await page.locator(`#createLeadForm_primaryPhoneNumber`).fill('888888');
      await page.locator(`//input[@class='smallSubmit']`).click();
      await page.waitForTimeout(3000)
       const pt1 = await page.title();
       console.log("page Title is:",pt1)
         })

 test("Test to edit a lead", async({page}) => { 
  await page.goto("http://leaftaps.com/opentaps/control/main");
   await page.locator(`#username`).fill('Demosalesmanager');
   await page.locator(`#password`).fill('crmsfa');
   await page.locator(`.decorativeSubmit`).click();
  // await page.waitForTimeout(3000)
   await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
  // await page.waitForTimeout(3000)
   await page.locator(`(//a[contains(text(),'Leads')])[1]`).click();
   await page.locator(`(//a[contains(text(),'Find Leads')])[1]`).click();
   await page.locator(`//input[@id="ext-gen248"]`).fill('Usha');
 await page.locator(`//button[contains(text(),'Find Leads')]`).click();
 await page.locator(`(//a[@class='linktext'])[4]`).click();
 // await page.waitForTimeout(3000)
 await page.locator(`//a[contains(text(),'Edit')]`).click();
   await page.locator(`#updateLeadForm_companyName`).fill('Google1');
   await page.locator(`#updateLeadForm_departmentName`).fill('IT1');
   await page.locator(`#updateLeadForm_description`).fill('I am doing good');
   await page.locator(`#updateLeadForm_annualRevenue`).fill('400005');
      await page.locator(`(//input[@class='smallSubmit'])[1]`).click();
       await page.waitForTimeout(3000)
      const pt = await page.title();
      console.log("Page title is:", pt)

         })