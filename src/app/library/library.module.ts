import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// widgets
import { WidgetAboutComponent } from "./components/widget-about/widget-about.component";
import { WidgetBookmarkComponent } from "./components/widget-bookmark/widget-bookmark.component";
import { WidgetDrawComponent } from "./components/widget-draw/widget-draw.component";
import { WidgetFilterComponent } from "./components/widget-filter/widget-filter.component";
import { WidgetQueryComponent } from "./components/widget-query/widget-query.component";
import { WidgetGeolocationComponent } from "./components/widget-geolocation/widget-geolocation.component";
import { MapModule } from "../map/map.module";
import { CoreModule } from "../core/core.module";
import { WidgetModule } from "../widget/widget.module";
import { WidgetPopupComponent } from "./components/widget-popup/widget-popup.component";
import { WidgetLayerListComponent } from "./components/widget-layer-list/widget-layer-list.component";
import { WidgetHomeComponent } from "./components/widget-home/widget-home.component";
import { WidgetZoomComponent } from "./components/widget-zoom/widget-zoom.component";
import { WidgetPrintComponent } from "./components/widget-print/widget-print.component";
import { WidgetLocateComponent } from "./components/widget-locate/widget-locate.component";
import { WidgetCompassComponent } from "./components/widget-compass/widget-compass.component";
import { WidgetSearchComponent } from "./components/widget-search/widget-search.component";
import { AccordionModule } from "primeng/accordion";
import { WidgetGeometrySearchComponent } from "./components/widget-geometry-search/widget-geometry-search.component";
import { WidgetBasemapGalleryComponent } from "./components/widget-basemap-gallery/widget-basemap-gallery.component";
import { WidgetBasemapToggleComponent } from "./components/widget-basemap-toggle/widget-basemap-toggle.component";
import { WidgetTrackComponent } from "./components/widget-track/widget-track.component";
import { WidgetLegendComponent } from "./components/widget-legend/widget-legend.component";

const LIBRARY_COMPONENTS = [
  WidgetHomeComponent,
  WidgetAboutComponent,
  WidgetBasemapGalleryComponent,
  WidgetBasemapToggleComponent,
  WidgetBookmarkComponent,
  WidgetDrawComponent,
  WidgetCompassComponent,
  WidgetFilterComponent,
  WidgetQueryComponent,
  WidgetGeolocationComponent,
  WidgetPopupComponent,
  WidgetLayerListComponent,
  WidgetLegendComponent,
  WidgetPrintComponent,
  WidgetLocateComponent,
  WidgetTrackComponent,
  WidgetZoomComponent,
  WidgetSearchComponent,
  WidgetGeometrySearchComponent,
];

/**
 * Librairie de widgets socle.
 *
 * Un widget 'plugin' est ce qui existe actuellement = un composanng angular
 * La différence dans cette appli c'est qu'au lieu d'interagir directement avec l'api esri
 *
 * Ils interagissent avec des composants du socle.
 */
@NgModule({
  imports: [
    CommonModule,
    MapModule,
    CoreModule,
    WidgetModule,
    // primeng
    AccordionModule,
  ],
  declarations: LIBRARY_COMPONENTS,
  exports: LIBRARY_COMPONENTS,
})
export class LibraryModule {}
