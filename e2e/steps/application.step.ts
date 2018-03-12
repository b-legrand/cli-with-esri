import { Given, When, Then } from 'cucumber';
import { AppPageObject } from '../pages/app.po';

const appPage = new AppPageObject();

Given('une application du socle', (callback) => {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
});
