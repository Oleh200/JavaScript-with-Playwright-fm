import { expect } from "@playwright/test";

export class EnterprisePage {
  constructor(page) {
    this.page = page;
    this.header = page.locator(
      '//h3[contains(text(), "Start your journey with GitHub")]'
    );
    this.link = page
      .locator(
        'a[href="https://github.com/account/enterprises/new?locale=en-US"]'
      )
      .nth(0);
    this.title = page.locator(
      ".SessionsAuthHeader-module__authFormHeaderTitle--HKSM6"
    );
  }

  async scrollToHeader() {
    await this.header.scrollIntoViewIfNeeded();
  }

  async verifyPageHeader() {
    await expect(this.header).toHaveText("Start your journey with GitHub");
  }

  async verifyLinkVisible() {
    await expect(this.link).toBeVisible();
  }

  async clickOnLink() {
    await this.link.click();
  }

  async verifyTitle() {
    await expect(this.title).toHaveText("Sign in to GitHub");
  }
}
