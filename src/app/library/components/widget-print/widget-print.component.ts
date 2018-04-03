import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "app-widget-print",
  templateUrl: "./widget-print.component.html",
  styleUrls: ["./widget-print.component.css"],
})
export class WidgetPrintComponent implements OnInit {
  @Input() public properties: __esri.PrintViewModelProperties;

  public viewModel: __esri.PrintViewModel;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/Print/PrintViewModel"])
      .then(([PrintViewModel]: [__esri.PrintViewModelConstructor]) => {
        this.viewModel = new PrintViewModel(this.properties);
      });
  }
}
