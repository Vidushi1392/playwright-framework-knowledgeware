/*
All the common methods of web dropdown which are used in the framework will be defined in this class.
ex: selectByVisibleText, selectByValue, selectByIndex, getSelectedOption etc.
All common methods Ex: visible, enabled, getText, getAttribute, getCssValue, getLocation, 
getSize etc. methods will be defined in the common-webelement classes.
*/

const webElementCommon = require('./common-webelement');

class WebDropDown extends webElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async selectByVisibleText(visibleText) {
        await this.waitForElementToBeVisible();
        await this.page.selectOption(this.locator, { label: visibleText });
    }   

    async selectByValue(value) {
        await this.waitForElementToBeVisible();
        await this.page.selectOption(this.locator, { value: value });
    }   

    async selectByIndex(index) {
        await this.waitForElementToBeVisible();
        const options = await this.page.$$(this.locator + ' option');       
    }
    async getSelectedOption() {
        await this.waitForElementToBeVisible();
        const selectedOption = await this.page.$(this.locator + ' option:checked');
        return await selectedOption.innerText();
    }
}

module.exports = WebDropDown;