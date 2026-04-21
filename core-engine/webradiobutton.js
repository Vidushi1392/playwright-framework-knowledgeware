/*
All the common methods of web link which are used in the framework will be defined in this class.
ex: click, getHref, getText etc.
All common methods Ex: visible, enabled, getText, getAttribute, getCssValue, getLocation, 
getSize etc. methods will be defined in the common-webelement classes.
*/

const webElementCommon = require('./common-webelement');

class WebRadioButton extends webElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async select() {
        await this.waitForElementToBeVisible();
        const isSelected = await this.page.check(this.locator);
    }

    async isSelected() {
        return await this.page.isChecked(this.locator);
    }

}
module.exports = WebRadioButton;