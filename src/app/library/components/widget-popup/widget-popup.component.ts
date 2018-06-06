import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-popup",
  templateUrl: "./widget-popup.component.html",
  styleUrls: ["./widget-popup.component.css"],
})
export class WidgetPopupComponent implements OnInit {
  @Input() public properties: __esri.PopupViewModelProperties;

  public viewModel: __esri.PopupViewModel;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/Popup/PopupViewModel"])
      .then(([PopupViewModel]: [__esri.PopupViewModelConstructor]) => {
        this.viewModel = new PopupViewModel(this.properties);
      });
  }
}
