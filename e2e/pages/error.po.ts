import { browser } from "protractor";

export class ErrorPageObject {

  navigateTo() {
    return browser.get("/random-non-existing-page-");
  }

}
