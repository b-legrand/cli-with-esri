import { EsriWidgetType } from "./esri-widget-type.enum";

export interface ExpectedWidget {
  type: EsriWidgetType;
  class: string;
}

const widgetClasses: ExpectedWidget[] = [
  {
    type: EsriWidgetType.AreaMeasurement3D,
    class: "esri.widget.AreaMeasurement3D",
  },
  { type: EsriWidgetType.Attribution, class: "esri.widget.Attribution" },
  { type: EsriWidgetType.BasemapGallery, class: "esri.widget.BasemapGallery" },
  { type: EsriWidgetType.BasemapToggle, class: "esri.widget.BasemapToggle" },
  { type: EsriWidgetType.Compass, class: "esri.widget.Compass" },
  {
    type: EsriWidgetType.CoordinateConversion,
    class: "esri.widget.CoordinateConversion",
  },
  {
    type: EsriWidgetType.DirectLineMeasurement3D,
    class: "esri.widget.DirectLineMeasurement3D",
  },
  { type: EsriWidgetType.Directions, class: "esri.widget.Directions" },
  { type: EsriWidgetType.Expand, class: "esri.widget.Expand" },
  { type: EsriWidgetType.Feature, class: "esri.widget.Feature" },
  { type: EsriWidgetType.Fullscreen, class: "esri.widget.Fullscreen" },
  { type: EsriWidgetType.Home, class: "esri.widget.Home" },
  { type: EsriWidgetType.LayerList, class: "esri.widget.LayerList" },
  { type: EsriWidgetType.Legend, class: "esri.widget.Legend" },
  { type: EsriWidgetType.Locate, class: "esri.widget.Locate" },
  {
    type: EsriWidgetType.NavigationToggle,
    class: "esri.widget.NavigationToggle",
  },
  { type: EsriWidgetType.Popup, class: "esri.widget.Popup" },
  { type: EsriWidgetType.Print, class: "esri.widget.Print" },
  { type: EsriWidgetType.ScaleBar, class: "esri.widget.ScaleBar" },
  { type: EsriWidgetType.Search, class: "esri.widget.Search" },
  { type: EsriWidgetType.Track, class: "esri.widget.Track" },
  { type: EsriWidgetType.Zoom, class: "esri.widget.Zoom" },
];
describe("EsriWidgetComponent", () => {
  describe("peut instancier les type de widgets esri :", () => {
    widgetClasses.forEach((expectedWidget: ExpectedWidget) => {
      describe(``, () => {
        it("can take constructor params", () => {});
      });
    });
  });
});
