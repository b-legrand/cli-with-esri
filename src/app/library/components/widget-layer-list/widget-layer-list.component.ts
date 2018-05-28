import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "app-widget-layer-list",
  templateUrl: "./widget-layer-list.component.html",
  styleUrls: ["./widget-layer-list.component.css"],
})
export class WidgetLayerListComponent implements OnInit {
  @Input() public properties: __esri.LayerListViewModelProperties;

  public viewModel: __esri.LayerListViewModel;
  public data: string;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/LayerList/LayerListViewModel"])
      .then(([LayerListViewModel]: [__esri.LayerListViewModelConstructor]) => {
        this.viewModel = new LayerListViewModel(this.properties);
      });
  }
}
