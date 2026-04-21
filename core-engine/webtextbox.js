const webElementCommon = require('./common-webelement');


class WebTextBox extends webElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async type(text) {
        await this.waitForElementToBeVisible();
        await this.locator.fill(text);
    }

    async clear() {
        await this.waitForElementToBeVisible();
        await this.page.fill(this.locator, '');
    }

    async getValue() {
        await this.waitForElementToBeVisible();
        return await this.page.inputValue(this.locator);
    }
}

module.exports = WebTextBox;