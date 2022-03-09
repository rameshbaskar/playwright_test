class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#search-text');
    this.searchButton = page.locator('#search-button');
  }

  async visit() {
    await this.page.goto('/');
  }

  async search(term) {
    await this.searchBox.fill(term);
    await this.searchButton.click();
  }
}

module.exports = HomePage;