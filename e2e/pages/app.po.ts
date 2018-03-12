import { browser, by, element } from 'protractor';

/**
 * Page / route principale de l'application.
 */
export class AppPageObject {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

}
