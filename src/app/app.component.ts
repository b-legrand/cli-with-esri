import {Component, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from './core/model/app.config';
import WidgetState from './widget/model/widget-state';
import {AppState} from './core/model/app.state';
import { AppStoreService } from './core/services/app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  themeColor: string;
  state: AppState;

  constructor(@Inject(APP_CONFIG) appConfig: AppConfig, store: AppStoreService) {
    this.themeColor = appConfig.themeColor;
    this.title = appConfig.appName;
    this.state = initialState();
    this.state =  {
      widgets: [],
      mapState: {
        viewProps: {
          zoom: 6,
          center: [2.2137, 46.2276]
        }
      }
    };
  }
}

export function initialState() {
  return {
    widgets: [],
    mapState: {
      viewProps: {
        zoom: 6,
        center: [2.2137, 46.2276]
      }
    }
  };
}

