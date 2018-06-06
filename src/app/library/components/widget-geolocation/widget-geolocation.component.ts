import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-geolocation",
  templateUrl: "./widget-geolocation.component.html",
  styleUrls: ["./widget-geolocation.component.css"],
})
export class WidgetGeolocationComponent implements OnInit {
  @Input() public properties: __esri.LocateProperties;

  @Output() public isReady: EventEmitter<any> = new EventEmitter();

  public esriWidget: __esri.Locate;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Locate"]).then(([Locate]: [__esri.LocateConstructor]) => {
      this.esriWidget = new Locate(this.properties);
    });
  }
}
