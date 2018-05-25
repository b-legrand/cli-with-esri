import { browser, by, element } from "protractor";

/**
 * PageObject d'accès à la carte/route principale de l'application.
 */
export class WidgetPageObject {
  navigateTo() {
    return browser.get("/map");
  }

  getParagraphText() {
    return element(by.css("app-root h1")).getText();
  }

  getWidgetButtons() {
    return element(by.css("button.esri-widget-button"));
  }

  getWidgetWindow(widgetId: string) {
    return element(by.css("widget-window"));
  }
}
