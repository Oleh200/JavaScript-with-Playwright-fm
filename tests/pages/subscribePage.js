import { expect } from "@playwright/test";

export class SubscribePage {
  constructor(page) {
    this.page = page;
    this.title = page.locator(
      'h1:has-text("Subscribe to our developer newsletter")'
    );
    this.workEmailInput = page.locator("#form-field-emailAddress");
    this.countrySelect = page.locator("#form-field-country");
    this.agreeChckbx = page.locator(
      ".Primer_Brand__Checkbox-module__Checkbox-wrapper___qo8KL"
    );
    this.subscribeBtn = page.locator('form button[type="submit"]');
    this.confirmForm = page.locator("#hero-section-brand-heading");
  }

  async checkDomain(expectedDomain) {
    const currentUrl = new URL(this.page.url());
    await expect(expectedDomain).toContain(currentUrl.hostname);
  }

  async verifyTitle() {
    await expect(this.title).toHaveText(
      "Subscribe to our developer newsletter"
    );
  }

  async setWorkEmailInput(value) {
    await this.workEmailInput.fill(value);
  }

  async selectCountryByValue(value) {
    await this.countrySelect.selectOption({ label: "Ukraine" });
  }

  async clickOnAgreeCheckbox() {
    await this.agreeChckbx.click();
  }

  async clickOnSubscribeBtn() {
    await this.subscribeBtn.click();
  }

  async verifySubscribe() {
    await expect(this.confirmForm).toHaveText("Thanks for subscribing");
  }
}
