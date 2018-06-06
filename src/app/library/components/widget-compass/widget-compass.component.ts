import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-compass",
  templateUrl: "./widget-compass.component.html",
  styleUrls: ["./widget-compass.component.css"],
})
export class WidgetCompassComponent implements OnInit {
  @Input() public properties: __esri.CompassViewModelProperties;

  public viewModel: __esri.CompassViewModel;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/Compass/CompassViewModel"])
      .then(([CompassViewModel]: [__esri.CompassViewModelConstructor]) => {
        this.viewModel = new CompassViewModel(this.properties);
      });
  }
}
