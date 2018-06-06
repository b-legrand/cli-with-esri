import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-popup",
  templateUrl: "./widget-popup.component.html",
  styleUrls: ["./widget-popup.component.css"],
})
export class WidgetPopupComponent implements OnInit {
  @Input() public properties: __esri.PopupProperties;

  public esriWidget: __esri.Popup;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Popup/Popup"]).then(([Popup]: [__esri.PopupConstructor]) => {
      this.esriWidget = new Popup(this.properties);
    });
  }
}
