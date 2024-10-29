import { dashboardLocators } from '../locators/dashboardLocators.js';

export default class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async isDashboardHeaderVisible() {
    await this.page.waitForSelector(dashboardLocators.dashboardHeader, { timeout: 10000 });
    return this.page.isVisible(dashboardLocators.dashboardHeader);
  }
}


