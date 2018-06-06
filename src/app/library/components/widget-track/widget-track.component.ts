import { Component, Input, OnInit } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-track",
  templateUrl: "./widget-track.component.html",
  styleUrls: ["./widget-track.component.css"],
})
export class WidgetTrackComponent implements OnInit {
  @Input() public properties: __esri.TrackViewModelProperties;

  public viewModel: __esri.TrackViewModel;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/Track/TrackViewModel"])
      .then(([TrackViewModel]: [__esri.TrackViewModelConstructor]) => {
        this.viewModel = new TrackViewModel(this.properties);
      });
  }
}
