/*
All functions related to web checkbox will be defined in this class.
ex: click, isChecked, check, uncheck etc.
All common methods Ex: visible, enabled, getText, getAttribute, getCssValue, getLocation, 
getSize etc. methods will be defined in the common-webelement classes.
*/

const webElementCommon = require('./common-webelement');

class WebCheckBox extends webElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async click() {
        await this.waitForElementToBeclickable();
        await this.page.click(this.locator);
    }   

    async check() {
        await this.waitForElementToBeVisible();
        const isChecked = await this.page.check(this.locator);
    }

    async uncheck() {
        await this.waitForElementToBeVisible();
        const isChecked = await this.page.uncheck(this.locator);
    }

    async isChecked() {
        return await this.page.isChecked(this.locator);
    }   

    async isUnChecked() {
        return !(await this.page.isChecked(this.locator));
    }
}

module.exports = WebCheckBox;