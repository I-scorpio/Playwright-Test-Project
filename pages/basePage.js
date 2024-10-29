export default class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(path) {
      await this.page.goto(path);  
    }
  
    async waitForElementVisible(locator) {
      await this.page.waitForSelector(locator, { state: 'visible' });
    }
  
    async takeScreenshot(filename) {
      await this.page.screenshot({ path: `./screenshots/${filename}.png` });
    }
  }
  