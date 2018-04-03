import { browser } from "protractor";

export class DemoPageObject {
  navigateTo() {
    return browser.get("/kitchen-sink");
  }
}
