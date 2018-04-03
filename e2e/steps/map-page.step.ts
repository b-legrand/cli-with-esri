import { defineSupportCode} from "cucumber";
import { MapPageObject } from "../pages/map.po";

defineSupportCode(({ Given, When, Then, Before }) => {
  let mapPage: MapPageObject;
  Before(() => {
      mapPage = new MapPageObject();
  });
  Given("Un composant carte", () => mapPage.navigateTo());
  When("", () => {});
  Then("", () => {});
});
