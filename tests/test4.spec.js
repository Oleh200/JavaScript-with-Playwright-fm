import { test, expect } from "@playwright/test";
import { StartingPage } from "./pages/startingPage";
import { SearchResultsPage } from "./pages/searchResultsPage";

test("4 autotest search word in GitHub.com", async ({ page }) => {
  const startingPage = new StartingPage(page);
  const searchResultsPage = new SearchResultsPage(page);
  await startingPage.goto();
  await startingPage.clickOnSearchBtn();
  await startingPage.setSearchInput("act");
  await page.keyboard.press("Enter");
  await searchResultsPage.expectResultsContain("act");
  await searchResultsPage.expectResultHrefContains("act");
});
