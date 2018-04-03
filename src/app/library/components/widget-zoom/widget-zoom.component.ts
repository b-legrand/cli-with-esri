import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "app-widget-zoom",
  templateUrl: "./widget-zoom.component.html",
  styleUrls: ["./widget-zoom.component.css"],
})
export class WidgetZoomComponent implements OnInit {
  @Input() public properties: __esri.ZoomViewModelProperties;

  public viewModel: __esri.ZoomViewModel;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/Zoom/ZoomViewModel"])
      .then(([ZoomViewModel]: [__esri.ZoomViewModelConstructor]) => {
        this.viewModel = new ZoomViewModel(this.properties);
      });
  }
}
