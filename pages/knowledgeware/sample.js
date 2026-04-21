const WebButton = require('../../core-engine/webbutton.js');
const WebTextBox = require('../../core-engine/webtextbox.js');

class RegisterPageOne {
    constructor(page) {
        this.page = page;   
        this.userName = page.locator('input[name="name"]');
        this.password = page.locator('input[name="password"]');
        this.confirmPassword = page.locator('input[name="confirmpassword"]');
        this.loginButton = page.locator('a');
    }

    async fillRegisterForm(name, password, confirmPassword) {
        await new WebTextBox(this.page, this.userName).type(name);
        await new WebTextBox(this.page, this.password).type(password);
        await new WebTextBox(this.page, this.confirmPassword).type(confirmPassword);
    }

    async clickLoginButton() {
        await new WebButton(this.page, this.loginButton).click();
    }
}

module.exports = RegisterPageOne;