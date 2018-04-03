import { Given, When, Then } from "cucumber";
import { AppPageObject } from "../pages/app.po";

defineSupportCode(({ Given, When, Then, Before }) => {
  let appPage: appPage;
  Before(() => {
    appPage = new appPage();
  });
  Given("Un composant carte", () => mapPage.navigateTo());
  When("", () => {});
  Then("", () => {});
});
