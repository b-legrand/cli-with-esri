import { browser, by, element } from 'protractor';

export class KitchenSinkPage {
  navigateTo() {
    return browser.get('/kitchen-sink');
  }

  getPageText() {
    return element(by.css('kitchen-sink-page h1')).getText();
  }

}
