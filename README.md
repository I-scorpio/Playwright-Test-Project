# Playwright Test Project

## Description
This project demonstrates automated testing using Playwright with ES modules. It showcases how to write and execute end-to-end tests
for the web application [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com).


## Prerequisites
- **Node.js** (version 14.x or higher) - [Download here](https://nodejs.org/)
- **npm** (Node Package Manager)
- **Git** - [Git Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/I-scorpio/Playwright-Test-Project.git
   cd playwright-test

Install the project dependencies:
npm install

Install Playwright browsers:
npx playwright install

Usage
npx playwright test

Project Structure
playwright-project/ │ ├── config/ │ └── playwright.config.js # Playwright configuration ├── pages/ │ ├── basePage.js # BasePage class for common page functions │ ├── loginPage.js # Login page object │ └── dashboardPage.js # Dashboard page object ├── locators/ │ ├── loginLocators.js # Login page locators │ └── dashboardLocators.js # Dashboard page locators ├── testData/ │ └── userCredentials.json # Test data for login credentials ├── tests/ │ ├── login.test.js # Login test cases │ └── dashboard.test.js # Dashboard test cases ├── .env # Environment configuration (if needed) ├── node_modules/ ├── package.json # Project dependencies ├── package-lock.json └── README.md # Project documentation

Configuration

The playwright.config.js file contains the configuration for your Playwright tests.
Update the configuration settings as necessary to suit your testing needs.