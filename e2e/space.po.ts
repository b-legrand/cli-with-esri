import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/space/1');
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

}

