import { expect } from "@playwright/test";

export class PricingPage {
  constructor(page) {
    this.page = page;
    this.text = page.locator(".h2-mktg").first();
    this.compareLink = page.locator('a[href="#compare-features"]');
    this.compareHeader = page.locator(".h1");
  }

  async verifyTitle() {
    await expect(this.text).toHaveText("Try the Copilot-powered platform");
  }

  async verifyCompareHeader() {
    await expect(this.compareHeader).toHaveText("Compare features");
  }

  async scrollToCompareLink() {
    await this.compareLink.scrollIntoViewIfNeeded();
  }

  async clickOnCompareLink() {
    await this.compareLink.click();
  }
}
