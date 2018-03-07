import {Component, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from './core/model/app.config';
import WidgetState from './widget/model/widget-state';
import {AppState} from './core/model/app.state';
import { AppStoreService } from './core/services/app-store.service';
import { Store } from 'redux';
import { AppStore } from './core/model/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  themeColor: string;
  state: AppState;

  constructor(
     @Inject(APP_CONFIG) appConfig: AppConfig,
     @Inject(AppStore) private store: Store<AppState>
    ) {
    this.themeColor = appConfig.themeColor;
    this.title = appConfig.appName;
    this.state = store.getState();
  }
}