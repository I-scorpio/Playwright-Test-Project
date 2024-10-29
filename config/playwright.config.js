import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '../tests',  // tests folder
  timeout: 60000,  // Global test timeout
  retries: 2,  // Retry failing tests twice
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',  
    headless: false,  // Set to true if you don't want to see the browser
    screenshot: 'only-on-failure',  // Capture screenshots on failure
    video: 'retain-on-failure',  // Record video only on failure
    trace: 'on-first-retry',  // Trace files on the first retry
  },

  // Reporter configuration (HTML report generation)
  reporter: [['html', { outputFolder: 'reports' }]],

  // Directory for storing test results
  outputDir: 'test-results/',
});
