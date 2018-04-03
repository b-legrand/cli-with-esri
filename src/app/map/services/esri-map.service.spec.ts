import { inject, TestBed } from "@angular/core/testing";

import { EsriMapService } from "./esri-map.service";
import { EsriLoaderService } from "./esri-loader.service";
import { APP_CONFIG, DEFAULT_APP_CONFIG } from "../../core/model/app.config";

describe("MapService", () => {
  let element: HTMLElement;
  let mapService: EsriMapService;
  let loaderService: EsriLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EsriMapService,
        EsriLoaderService,
        {
          provide: APP_CONFIG,
          useValue: DEFAULT_APP_CONFIG,
        },
      ],
    });
    mapService = TestBed.get(EsriMapService);
    loaderService = TestBed.get(EsriLoaderService);
    element = document.createElement("div");
    element.id = "map-container";
    // simule l'appel au chargement de l'api.
    spyOn(loaderService, "loadModules").and.returnValue(Promise.resolve([props => props, () => {}]));
  });

  it(
    "peut être injecté",
    inject([EsriMapService], (service: EsriMapService) => {
      expect(service).toBeTruthy();
    }),
  );

  it("peut charger une Map esri", done => {
    return mapService
      .loadMap({ basemap: "streets" }, { zoom: 6, center: [] }, element)
      .then(items => {
        expect(items.map).toBeTruthy();
        expect(items.mapView).toBeTruthy();
        done();
      })
      .catch(reason => {
        done.fail(reason);
      });
  });

  it("peut charger une WebMap esri", done => {
    return mapService
      .loadWebMap(
        {
          portalItem: {
            id: "e691172598f04ea8881cd2a4adaa45ba",
          },
        },
        { zoom: 6, center: [] },
        element,
      )
      .then(items => {
        expect(items.mapView).toBeTruthy();
        expect(items.map).toBeTruthy();
        done();
      })
      .catch(reason => {
        done.fail(reason);
      });
  });
});
