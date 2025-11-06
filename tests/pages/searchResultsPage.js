import { expect } from "@playwright/test";

export class SearchResultsPage {
  constructor(page) {
    this.page = page;
    this.resultPage = page
      .locator('div[class^="Box-sc"][class$="kqcSDM"]')
      .first();
    this.resultLink = page.locator(".prc-Link-Link-85e08").first();
  }

  async getResultsText() {
    return await this.resultPage.textContent();
  }

  async expectResultsContain(word) {
    const text = await this.getResultsText();
    expect(text).toContain(word);
  }

  async expectResultHrefContains(word) {
    const href = await this.resultLink.getAttribute("href");
    expect(href).toContain(word);
  }
}
