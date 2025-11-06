import { expect } from "@playwright/test";

export class CreateAccountPage {
  constructor(page) {
    this.page = page;
    this.text = page.locator(".signups-rebrand__container-marketing h1");
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.usernameInput = page.locator("#login");
    this.countryBtn = page.locator('[id^="select-panel"][id$="-button"]');
    this.receiveemailChckBx = page.locator(".FormControl-checkbox");
  }

  async verifyPageTitle() {
    await expect(this.text).toHaveText("Create your free account");
  }

  async setEmailInput(value) {
    await this.emailInput.fill(value);
  }

  async setPasswordlInput(value) {
    await this.passwordInput.fill(value);
  }

  async setUsernameInput(value) {
    await this.usernameInput.fill(value);
  }

  async selectCountry(countryName) {
    await this.countryBtn.click();
    const option = this.page.locator(
      `//span[contains(@class,"ActionListItem-label") and normalize-space()="${countryName}"]`
    );
    await option.click();
  }

  async clickOnReceiveChckBx() {
    await this.receiveemailChckBx.click();
  }
}
