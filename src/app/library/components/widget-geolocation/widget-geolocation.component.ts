import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-geolocation",
  templateUrl: "./widget-geolocation.component.html",
  styleUrls: ["./widget-geolocation.component.css"],
})
export class WidgetGeolocationComponent implements OnInit {
  @Input() public properties: __esri.LocateViewModelProperties;

  @Output() public isReady: EventEmitter<any> = new EventEmitter();

  public viewModel: __esri.LocateViewModel;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/Locate/LocateViewModel"])
      .then(([LocateViewModel]: [__esri.LocateViewModelConstructor]) => {
        this.viewModel = new LocateViewModel(this.properties);
      });
  }
}
