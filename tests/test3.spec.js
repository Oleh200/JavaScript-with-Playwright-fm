import { test, expect } from "@playwright/test";
import { StartingPage } from "./pages/startingPage";
import { SubscribePage } from "./pages/subscribePage";

test("3 autotest Subscribe for newsletter", async ({ page }) => {
  const startingPage = new StartingPage(page);
  const subscribePage = new SubscribePage(page);
  await startingPage.goto();
  await startingPage.scrollToSignUpBtn();
  await startingPage.verifySubscriveButton();
  await startingPage.clickOnSubscribeBtn();
  await subscribePage.checkDomain("resources.github.com");
  await subscribePage.verifyTitle();
  await subscribePage.setWorkEmailInput("test@example.com");
  await subscribePage.selectCountryByValue("UA"); //
  await subscribePage.clickOnAgreeCheckbox();
  await subscribePage.clickOnSubscribeBtn();
  await subscribePage.verifySubscribe();
});
