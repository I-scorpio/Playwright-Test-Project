import BasePage from './basePage.js';
import { loginLocators } from '../locators/loginLocators.js';

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }
  async login(username, password) {
    await this.page.fill(loginLocators.usernameInput, username);
    await this.page.fill(loginLocators.passwordInput, password);
    await this.page.click(loginLocators.loginButton);
  }

  async checkErrorMessage() {
    return this.page.isVisible(loginLocators.errorMessage);
  }
}
