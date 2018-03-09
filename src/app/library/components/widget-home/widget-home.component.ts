import { Component, OnInit, Input } from '@angular/core';
import { EsriLoaderService } from '../../../map/services/esri-loader.service';

@Component({
  selector: 'app-widget-home',
  templateUrl: './widget-home.component.html',
  styleUrls: ['./widget-home.component.css']
})
export class WidgetHomeComponent implements OnInit {

  @Input() public properties: __esri.HomeViewModelProperties;

  public viewModel: __esri.HomeViewModel;

  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() {
    this.esriLoader
      .loadModules(['esri/widgets/Home/HomeViewModel'])
      .then(([HomeViewModel]: [__esri.HomeViewModelConstructor]) => {
        this.viewModel = new HomeViewModel(this.properties);
      });
  }

}
