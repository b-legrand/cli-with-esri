import { browser, by, element } from "protractor";

/**
 * Page / route principale de l'application.
 */
export class AppPageObject {
  navigateTo() {
    return browser.get("/");
  }

  getApplicationTitle() {
    return element(by.css("sncf-header h1")).getText();
  }
}
