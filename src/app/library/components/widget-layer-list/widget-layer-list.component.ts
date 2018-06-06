import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-layer-list",
  templateUrl: "./widget-layer-list.component.html",
  styleUrls: ["./widget-layer-list.component.css"],
})
export class WidgetLayerListComponent implements OnInit {
  @Input() public properties: __esri.LayerListProperties;

  public esriWidget: __esri.LayerList;
  public data: string;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/LayerList/LayerList"])
      .then(([LayerList]: [__esri.LayerListConstructor]) => {
        this.esriWidget = new LayerList(this.properties);
      });
  }
}
