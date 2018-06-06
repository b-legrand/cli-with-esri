import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-draw",
  templateUrl: "./widget-draw.component.html",
  styleUrls: ["./widget-draw.component.css"],
})
export class WidgetDrawComponent implements OnInit {
  @Input() public properties: __esri.SketchProperties;

  public esriWidget: __esri.Sketch;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Sketch/Sketch"]).then(([Sketch]: [__esri.SketchConstructor]) => {
      this.esriWidget = new Sketch(this.properties);
    });
  }
}
