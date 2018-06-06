import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-locate",
  templateUrl: "./widget-locate.component.html",
  styleUrls: ["./widget-locate.component.css"],
})
export class WidgetLocateComponent implements OnInit {
  @Input() public properties: __esri.LocateProperties;

  public esriWidget: __esri.Locate;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Locate/Locate"]).then(([Locate]: [__esri.LocateConstructor]) => {
      this.esriWidget = new Locate(this.properties);
    });
  }
}
