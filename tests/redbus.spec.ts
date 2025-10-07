import { chromium,webkit,test } from "@playwright/test";

test("Test to redbus site", async() => { 
    
   const browser = await chromium.launch({channel:'msedge' , headless:false}); // Step1 --> Open browser
   const context = await browser.newContext(); // Step2 --> Create an incoginto/isolated window named context
   const page    = await context.newPage(); //step3--> Create a page in thw isolated window
  await page.goto(`https://www.redbus.in/`)
  const pt = await page.title()
  const url = page.url();
  console.log('Page Title is:',pt);
  console.log('Current URL is:', url);
   /* firefox.launch()
   webkit.launch() */

   //test("Test to flipkart site", async() => { 
    const browser1 = await webkit.launch({channel:'webkit' , headless:false});
   const context1 = await browser1.newContext(); 
      const page1    = await context1.newPage(); 
  await page1.goto(`https://www.flipkart.com/`)
  const pt1 = await page1.title()
  const url1 = page1.url();
  console.log('Page Title is:',pt1);
  console.log('Current URL is:', url1); 
   /* firefox.launch()
   webkit.launch() */

})