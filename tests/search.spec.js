const { test } = require('@playwright/test');
const HomePage = require('../lib/pages/home.page');
const ResultsPage = require('../lib/pages/results.page');

let homePage, resultsPage;

test.beforeAll(async ({ browser }) => {
  const page = await (await browser.newContext()).newPage();
  homePage = new HomePage(page);
  resultsPage = new ResultsPage(page);
});

test.beforeEach(async () => {
  await homePage.visit();
});

test.describe('Search', () => {
  test('should be able to search from home page', async () => {
    await homePage.search('Manager');
    await resultsPage.searchShouldBeSuccessful();
  });
});