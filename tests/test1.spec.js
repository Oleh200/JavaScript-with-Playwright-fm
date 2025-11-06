import { test, expect } from "@playwright/test";
import { StartingPage } from "./pages/startingPage";
import { CreateAccountPage } from "./pages/createAccountPage";

test("1 autotest create an account on GitHub", async ({ page }) => {
  const startingPage = new StartingPage(page);
  const createAccountPage = new CreateAccountPage(page);
  await startingPage.goto();
  await startingPage.clickOnSignUpBtn();
  await createAccountPage.verifyPageTitle();
  await createAccountPage.setEmailInput("emailtest1@gmail.com");
  await createAccountPage.setPasswordlInput("passwordtest_123");
  await createAccountPage.setUsernameInput("uswernametest1");
  await createAccountPage.selectCountry("Ukraine");
  await createAccountPage.clickOnReceiveChckBx();
});
