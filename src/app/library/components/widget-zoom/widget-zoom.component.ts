import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-zoom",
  templateUrl: "./widget-zoom.component.html",
  styleUrls: ["./widget-zoom.component.css"],
})
export class WidgetZoomComponent implements OnInit {
  @Input() public properties: __esri.ZoomProperties;

  public esriWidget: __esri.Zoom;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Zoom/Zoom"]).then(([Zoom]: [__esri.ZoomConstructor]) => {
      this.esriWidget = new Zoom(this.properties);
    });
  }
}
