import { test, expect } from "@playwright/test";
import { StartingPage } from "./pages/startingPage";
import { EnterprisePage } from "./pages/enterprisePage";

test("2 autotest check Enterprise page", async ({ page }) => {
  const startingPage = new StartingPage(page);
  const enterprisePage = new EnterprisePage(page);
  await startingPage.goto();
  await startingPage.scrollToEnterpriseLink();
  await startingPage.clickOnEnterpriseLink();
  await enterprisePage.scrollToHeader();
  await enterprisePage.verifyPageHeader();
  await enterprisePage.verifyLinkVisible();
  await enterprisePage.clickOnLink();
  await enterprisePage.verifyTitle();
});
