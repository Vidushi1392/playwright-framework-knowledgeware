/*
Open URL = https://playwright.dev/docs/introduction

and click on button using webbutton.js class which has common methods related to button operation

*/

const {test, expect} = require('@playwright/test');
const WebButton = require('../../core-engine/webbutton.js');
const WebTextBox = require('../../core-engine/webtextbox.js');

test ('Web Button Operations', async({page}) => {
//Navigate to the URL
    await page.goto('https://knowledgeware.in/final.html');
//Enter text in the textbox using webTextBox class
    new WebTextBox(page,page.locator('input[name="name"]')).type('Playwright');

    //Enter text in the password using webTextBox class
    new WebTextBox(page, page.locator('input[name="password"]')).type('Playwright');

    //Enter text in the confirm password using webTextBox class
    new WebTextBox(page, page.locator('input[name="confirmpassword"]')).type('Playwright');
    //Create the instance of webButton class and click on the button

    new WebButton(page, page.locator('a')).click();
    await page.waitForTimeout(6000);

});

/*
Jenkins for our project:

Jenkins has 5 *pre-requisites for CI/CD pipeline:
1st * - minute (0-59)
2nd * - hour (0-23)
3rd * - day of month (1-31)
4th * - month (1-12)
5th * - day of week (0-6) (Sunday(0) to Saturday(6))
*/