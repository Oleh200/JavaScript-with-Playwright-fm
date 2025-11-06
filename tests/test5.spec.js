import { test, expect } from "@playwright/test";
import { StartingPage } from "./pages/startingPage";
import { PricingPage } from "./pages/pricingPage";

test("5 autotest check that compare features functions", async ({ page }) => {
  const startingPage = new StartingPage(page);
  const pricingPage = new PricingPage(page);
  await startingPage.goto();
  await startingPage.clickOnPricingLink();
  await pricingPage.verifyTitle();
  await pricingPage.scrollToCompareLink();
  await pricingPage.clickOnCompareLink();
  await pricingPage.verifyCompareHeader();
});
