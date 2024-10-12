import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import credentials from '../testData/userCredentials.json';

test.describe('Login Tests', () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate('https://opensource-demo.orangehrmlive.com');  // Navigate to the login page
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    console.log('Attempting login...');
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);
    dashboardPage = new DashboardPage(page);
    
    console.log('Login completed. Waiting for dashboard...');
    expect(await dashboardPage.isDashboardHeaderVisible()).toBeTruthy();  // Check for dashboard header
  });
});
