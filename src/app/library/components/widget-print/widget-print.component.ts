import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-print",
  templateUrl: "./widget-print.component.html",
  styleUrls: ["./widget-print.component.css"],
})
export class WidgetPrintComponent implements OnInit {
  @Input() public properties: __esri.PrintProperties;

  public esriWidget: __esri.Print;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Print/Print"]).then(([Print]: [__esri.PrintConstructor]) => {
      this.esriWidget = new Print(this.properties);
    });
  }
}
