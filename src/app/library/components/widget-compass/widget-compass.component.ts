import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-compass",
  templateUrl: "./widget-compass.component.html",
  styleUrls: ["./widget-compass.component.css"],
})
export class WidgetCompassComponent implements OnInit {
  @Input() public properties: __esri.CompassProperties;

  public esriWidget: __esri.Compass;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Compass"]).then(([Compass]: [__esri.CompassConstructor]) => {
      this.esriWidget = new Compass(this.properties);
    });
  }
}
