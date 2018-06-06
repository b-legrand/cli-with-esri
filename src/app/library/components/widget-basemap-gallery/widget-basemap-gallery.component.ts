import { Component, OnInit } from "@angular/core";

@Component({
  selector: "widget-basemap-gallery",
  templateUrl: "./widget-basemap-gallery.component.html",
  styleUrls: ["./widget-basemap-gallery.component.css"],
})
export class WidgetBasemapGalleryComponent implements OnInit {
  @Input() public properties: __esri.BasemapGalleryProperties;

  public esriWidget: __esri.BasemapGallery;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    this.esriLoader
      .loadModules(["esri/widgets/BasemapGallery"])
      .then(([BasemapGallery]: [__esri.BasemapGalleryConstructor]) => {
        this.esriWidget = new BasemapGallery(this.properties);
      });
  }
}
