const { expect } = require('@playwright/test');

class ResultsPage {
  constructor(page) {
    this.page = page;
    this.jobCard = page.locator('#job-card-0');
  }

  async searchShouldBeSuccessful() {
    await expect(this.jobCard).toBeVisible({ timeout: 6000 });
  }
}

module.exports = ResultsPage;