    /*
I am holding the code for the first page of the registration process. This page contains the username, password, confirm password fields and a login button. I have created methods to fill the registration form and click on the login button. I am using the WebTextBox and WebButton classes from the core engine to interact with the web elements on this page.
*/

const {test, expect} = require('@playwright/test');
const RegisterPageOne = require('../../pages/knowledgeware/registerPageOne.js');
const config = require('../../knowledgeware/qa.config.js');

test('Register Page One', async ({page}) => {

    //read specific node data from the config file
    const url = config.registerPageOne.url;
    const username = config.registerPageOne.username;
    const password = config.registerPageOne.password;
    const confirmPassword = config.registerPageOne.confirmPassword;
    
    //Navigate to the URL
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    
    //Create the instance of registerPageOne class and call the methods
    const registerPageOne = new RegisterPageOne(page);
    //Fill the registration form and click on the login button
    await registerPageOne.fillRegisterForm(username, password, confirmPassword);
    await registerPageOne.clickLoginButton();
    await page.waitForTimeout(6000);
}); 