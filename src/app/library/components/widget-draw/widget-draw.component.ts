import { Component, OnInit, Input } from '@angular/core';
import { EsriLoaderService } from '../../../map/services/esri-loader.service';

@Component({
  selector: 'widget-draw',
  templateUrl: './widget-draw.component.html',
  styleUrls: ['./widget-draw.component.css']
})
export class WidgetDrawComponent implements OnInit {

  @Input()
  public properties: __esri.SketchViewModelProperties;

  public viewModel: __esri.SketchViewModel;

  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() {
    this.esriLoader
      .loadModules(['esri/widgets/Sketch/SketchViewModel'])
      .then(([SketchViewModel]: [__esri.SketchViewModelConstructor]) => {
        this.viewModel = new SketchViewModel(this.properties);
      }) ;
  }

}
