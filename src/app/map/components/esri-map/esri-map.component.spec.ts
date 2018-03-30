import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EsriMapComponent } from "./esri-map.component";
import { EsriMapService } from "../../services/esri-map.service";
import { EsriLoaderService } from "../../services/esri-loader.service";
import { ProgressSpinnerModule } from "primeng/primeng";
import { APP_CONFIG } from "../../../core/model/app.config";


describe("EsriMapComponent", () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;
  // fausse fonction loadMap/loadWebmap du EsriMapService.
  const loadMapSpy: any = (mapProps, mapViewProps, element) => {
    return Promise.resolve();
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EsriMapComponent],
        imports: [ProgressSpinnerModule],
        providers: [
          EsriMapService,
          EsriLoaderService,
          { provide: APP_CONFIG, useValue: { apiVersion: "4.6" } },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EsriMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Charge une 'esri/Map' avec des MapProperties.", () => {
    expect(component).toBeTruthy();
    component.mapProperties = { basemap: "gray" };
    component.mapViewProperties = {
      zoom: 6,
      center: [0, 0],
    };
    // execute.
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  describe("Charge une 'esri/WebMap' avec des WebMapProperties.", () => {
    component.webMapProperties = {
      portalItem: {
        id: "e691172598f04ea8881cd2a4adaa45ba",
      },
    };
    component.mapViewProperties = {
      zoom: 6,
      center: [0, 0],
    };
    // execute.
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
