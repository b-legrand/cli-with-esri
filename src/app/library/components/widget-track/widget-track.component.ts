import { Component, Input, OnInit } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-track",
  templateUrl: "./widget-track.component.html",
  styleUrls: ["./widget-track.component.css"],
})
export class WidgetTrackComponent implements OnInit {
  @Input() public properties: __esri.TrackProperties;

  public esriWidget: __esri.Track;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Track/Track"]).then(([Track]: [__esri.TrackConstructor]) => {
      this.esriWidget = new Track(this.properties);
    });
  }
}
