import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG } from './core/model/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  viewProps: __esri.MapViewProperties;
  themeColor: string;
  constructor(@Inject(APP_CONFIG) appConfig: AppConfig) {
    this.themeColor = appConfig.themeColor;
    this.title = appConfig.appName;
    this.viewProps = {
      zoom: 6,
      center: [2.2137, 46.2276]
    };
  }
}
