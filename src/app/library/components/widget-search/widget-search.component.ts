import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-search",
  templateUrl: "./widget-search.component.html",
  styleUrls: ["./widget-search.component.css"],
})
export class WidgetSearchComponent implements OnInit {
  @Input() public properties: __esri.SearchProperties;

  public esriWidget: __esri.Search;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader.loadModules(["esri/widgets/Search/Search"]).then(([Search]: [__esri.SearchConstructor]) => {
      this.esriWidget = new Search(this.properties);
    });
  }
}
