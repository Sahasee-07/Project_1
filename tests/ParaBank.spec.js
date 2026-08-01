import {test, expect} from '@playwright/test';
// [1] Login page
// test('Login ParaBank' ,async({page})=> {
//     await page.goto("https://parabank.parasoft.com/parabank/index.htm");
//     await expect (page).toHaveURL("https://parabank.parasoft.com/parabank/index.htm");
//     await page.locator('input[name="username"]').fill('Sahasee');
//     await page.locator('input[name="password"]').fill('Sahasee');
//     await page.locator('input[class="button"]').click();
    //await expect (page).toHaveURL(/overview\.htm/);
//    // await page.pause();
// });


//invalid credentials - [2] invalid user or password
// test('invalid credentials',  async({page})=> {
//     await page.goto("https://parabank.parasoft.com/parabank/index.htm");
//     //await expect (page).toHaveURL("https://parabank.parasoft.com/parabank/index.htm");
//     await page.locator('input[name="username"]').fill('Sahasee');
//     await page.locator('input[name="password"]').fill('Sahasee123');
//     await page.locator('input[class="button"]').click();
//     await expect(page.locator('.error')).toBeVisible();
//     await expect(page.locator('.title')).toBeVisible();
// });

//invalid credentials - [3] Empty user or password

// test('Empty credentials', async({page}) =>{

//     await page.goto("https://parabank.parasoft.com/parabank/index.htm");
//     await page.locator('input[name="username"]').fill('');
//     await page.locator('input[name="password"]').fill('');
//     await page.locator('input[class="button"]').click();
// await expect (page).toHaveURL(/login\.htm/);
// });


//[4] logout scenario
// test('logout Scenario', async({page}) =>{
//         await page.goto("https://parabank.parasoft.com/parabank/index.htm");
//         await expect (page).toHaveURL("https://parabank.parasoft.com/parabank/index.htm");
//         await page.locator('input[name="username"]').fill('Sahasee');
//         await page.locator('input[name="password"]').fill('Sahasee');
//         await page.locator('input[class="button"]').click();
//         await page.locator('a[href="logout.htm"]').click();
//          await expect (page).toHaveURL(/index\.htm/);
//         await page.locator('input[name="username"]').fill('Sahasee');
// });
//await expect (page).toHaveURL("https://parabank.parasoft.com/parabank/index.htm");
    //click on register
//[5] Navigte the register page
test('Navigate the register page' ,async({page}) =>{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.locator('a[href*="register.htm"]').click();
    await page.locator('[name="customer.firstName"]').waitFor();                                //  await page.waitForLoadState('networkidle'); -- alternavtive for loading the page interactioN
    await page.locator('[name="customer.firstName"]').fill('Sahasee');
    await page.locator('[name="customer.lastName"]').fill("Jadhav");
    await page.locator('[name="customer.address.street"]').fill("Mumbai");
    await page.locator('[name="customer.address.city"]').fill("Navi-Mumbai");
    await page.locator('[name="customer.address.state"]').fill("Maharashtra");
    await page.locator('[name="customer.address.zipCode"]').fill("400614");
    await page.locator('[name="customer.phoneNumber"]').fill("8989564852");
    await page.locator('[name="customer.ssn"]').fill("54565676");
    await page.locator('[name="customer.username"]').fill("Sahasee");
    await page.locator('[name="customer.password"]').fill("Sahasee");
    await page.locator('[name="repeatedPassword"]').fill("Sahasee");
  
  // Click Register button
  await page.locator('input[value="Register"]').click();

  // Assert registration success
 //await expect(page.locator('h1')).toContainText('Welcome');
 await expect(page.locator('h1')).toBeVisible();



});