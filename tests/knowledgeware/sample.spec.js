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