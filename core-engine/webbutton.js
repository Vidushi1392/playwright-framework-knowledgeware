/*This class holds all the common methods of web button which are used in the framework.
ex: click, doubleClick, rightClick etc.
All common methods Ex: visible, enabled, getText, getAttribute, getCssValue, getLocation, 
getSize etc. methods will be defined in the common-webelement classes.
*/

const webElementCommon = require('./common-webelement');

class WebButton extends webElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async click() {
        //await this.page.waitForTimeout(2000);
        await this.waitForElementToBeclickable();
        await this.locator.click();
    }

    async doubleClick() {
        await this.waitForElementToBeclickable();
        await this.page.dblclick(this.locator);
    }       

    async rightClick() {
        await this.waitForElementToBeclickable();
        await this.page.click(this.locator, { button: 'right' });
    }   

    async hover() {
        await this.waitForElementToBeVisible();
        await this.page.hover(this.locator);
    }   

    async dragAndDrop(targetLocator) {
        await this.page.waitForSelector(this.locator, { state: 'visible' });
        await this.page.dragTo(this.locator, this.page.locator(targetLocator));
    }   

}

    module.exports = WebButton;