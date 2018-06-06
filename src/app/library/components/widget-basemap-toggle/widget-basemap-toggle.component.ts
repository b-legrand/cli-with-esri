import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "widget-basemap-toggle",
  templateUrl: "./widget-basemap-toggle.component.html",
  styleUrls: ["./widget-basemap-toggle.component.css"],
})
export class WidgetBasemapToggleComponent implements OnInit {
  @Input() public properties: __esri.BasemapToggleProperties;

  public esriWidget: __esri.BasemapToggle;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/BasemapToggle"])
      .then(([BasemapToggle]: [__esri.BasemapToggleConstructor]) => {
        this.esriWidget = new BasemapToggle(this.properties);
      });
  }
}
