import { Component, OnInit, Input } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

@Component({
  selector: "widget-search",
  templateUrl: "./widget-search.component.html",
  styleUrls: ["./widget-search.component.css"],
})
export class WidgetSearchComponent implements OnInit {
  @Input() public properties: __esri.SearchViewModelProperties;

  public viewModel: __esri.SearchViewModel;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/Search/SearchViewModel"])
      .then(([SearchViewModel]: [__esri.SearchViewModelConstructor]) => {
        this.viewModel = new SearchViewModel(this.properties);
      });
  }
}
