import { expect } from "@playwright/test";

export class StartingPage {
  constructor(page) {
    this.page = page;
    this.signupBtn = page.locator(
      'a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]'
    );
    this.enterpriseLink = page.locator(
      '//footer//a[contains(text(),"Enterprise")]'
    );
    this.subscribeBtn = page.locator('[class^="btn-mktg"]');
    this.searchBtn = page.locator(
      '[class^="header-search-button"][class$="box-shadow-none"]'
    );
    this.searchInput = page.locator("#query-builder-test");
    this.pricingLink = page.locator('a[href="https://github.com/pricing"]');
  }

  async goto() {
    await this.page.goto("https://github.com/");
  }

  async clickOnSignUpBtn() {
    await this.signupBtn.click();
  }

  async scrollToEnterpriseLink() {
    await this.enterpriseLink.scrollIntoViewIfNeeded();
  }

  async clickOnEnterpriseLink() {
    await this.enterpriseLink.click();
  }

  async scrollToSignUpBtn() {
    await this.subscribeBtn.scrollIntoViewIfNeeded();
  }

  async verifySubscriveButton() {
    await expect(this.subscribeBtn).toBeVisible();
    await expect(this.subscribeBtn).toBeEnabled();
  }

  async clickOnSubscribeBtn() {
    await this.subscribeBtn.click();
  }

  async clickOnSearchBtn() {
    await this.searchBtn.click();
  }

  async setSearchInput(value) {
    await this.searchInput.fill(value);
  }

  async clickOnPricingLink() {
    await this.pricingLink.click();
  }
}
