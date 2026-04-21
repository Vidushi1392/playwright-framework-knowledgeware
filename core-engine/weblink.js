/*
All common functions related to web link will be defined in this class.
ex: click, getHref, getText etc.
All common methods Ex: visible, enabled, getText, getAttribute, getCssValue, getLocation, 
getSize etc. methods will be defined in the common-webelement classes.
*/

const webElementCommon = require('./common-webelement');

class WebLink extends webElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }  
    
    async click() {
        await this.waitForElementToBeclickable();
        await this.page.click(this.locator);
    }

    async getHref() {
        return await this.page.getAttribute(this.locator, 'href');
    }

    async getText() {
        return await this.page.getText(this.locator);
    }
}

module.exports = WebLink;