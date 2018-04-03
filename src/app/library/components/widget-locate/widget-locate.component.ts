import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "app-widget-locate",
  templateUrl: "./widget-locate.component.html",
  styleUrls: ["./widget-locate.component.css"],
})
export class WidgetLocateComponent implements OnInit {
  @Input() public properties: __esri.LocateViewModelProperties;

  public viewModel: __esri.LocateViewModel;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/Locate/LocateViewModel"])
      .then(([LocateViewModel]: [__esri.LocateViewModelConstructor]) => {
        this.viewModel = new LocateViewModel(this.properties);
      });
  }
}
