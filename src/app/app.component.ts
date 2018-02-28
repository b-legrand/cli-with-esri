import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Maquette WidgetX';
  viewProps: __esri.MapViewProperties;
  constructor() {
    this.viewProps = {
      zoom: 6,
      center: [2.2137, 46.2276]
    };
  }
}
