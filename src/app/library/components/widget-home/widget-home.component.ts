import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-home",
  templateUrl: "./widget-home.component.html",
  styleUrls: ["./widget-home.component.css"],
})
export class WidgetHomeComponent implements OnInit {
  @Input() public properties: __esri.HomeProperties;

  public esriWidget: __esri.Home;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Home/Home"]).then(([Home]: [__esri.HomeConstructor]) => {
      this.esriWidget = new Home(this.properties);
    });
  }
}
