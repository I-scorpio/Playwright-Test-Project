import { test, expect } from '@playwright/test';
import DashboardPage from '../pages/dashboardPage.js';
import LoginPage from '../pages/loginPage.js';
import credentials from '../testData/userCredentials.json';

test.describe('Dashboard Tests', () => {
  let dashboardPage;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate('https://opensource-demo.orangehrmlive.com');
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);
    dashboardPage = new DashboardPage(page);
  });

  test('should display dashboard header after successful login', async () => {
    await expect(await dashboardPage.isDashboardHeaderVisible()).toBeTruthy(); 
  });
});
