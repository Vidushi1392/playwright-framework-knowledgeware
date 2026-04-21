/*this class holds the common webelement methods which are used in the framework.
ex: click, type, getText, isVisible, enabled etc.
and all other methods will be used in their respective classes. 
this class will be extended by all the classes in the framework.
Webbutton, WebTextBox, WebDropDown, WebCheckBox, WebRadioButton, WebLink, WebImage, WebTable, WebFrame, WebAlert, WebWindow etc.
classes will extend this class and will use the methods of this class.
web button : click, isVisible, enabled, getText, getAttribute, getCssValue, getLocation, getSize etc.
web link: href, click etc
web dropdown: selectByVisibleText, selectByValue, selectByIndex, getOptions etc. 7084119772-Online 6388474540-
*/

class webElementCommon {
    constructor(page, locator) {
        this.page = page;
        this.locator = locator;
    } 

    async isVisible() {
        return await this.locator.isVisible();
    }

    async isEnabled() {
        return await this.locator.isEnabled();
    }

    async getText() {
        return await this.locator.innerText();
    }

    async waitForElement(timeout = 5000) {
        await this.locator.waitFor({timeout});
    }
    async waitForElementToBeclickable(timeout = 5000) {
        await this.locator.waitFor( { state: 'attached', timeout });
        await this.locator.waitFor( { state: 'visible', timeout });
        //await this.page.waitForSelector(this.locator, { state: 'enabled', timeout: timeout });
    }

    async waitForElementToBeVisible(timeout = 5000) {
        await this.locator.waitFor({ state: 'visible', timeout });
    }

    async waitForElementToBeEnabled(timeout = 5000) {
        await this.locator.waitFor({ state: 'enabled', timeout});
    }

    async waitForElementToBeHidden(timeout = 5000) {
        await this.locator.waitFor({ state: 'hidden', timeout });
    }

    async waitForElementToBeDisabled(timeout = 5000) {
        await this.locator.waitFor({ state: 'disabled', timeout });
    }

    async waitForElementToBeInvisible(timeout = 3000) {
        await this.locator.waitFor({ state: 'hidden', timeout});
    }

    async getAttribute(attributeName) {
        return await this.locator.getAttribute(attributeName);
    }
}

module.exports = webElementCommon;