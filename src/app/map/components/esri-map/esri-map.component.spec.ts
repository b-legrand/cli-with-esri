import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EsriMapComponent } from "./esri-map.component";
import { EsriMapService } from "../../services/esri-map.service";
import { ProgressSpinnerModule } from "primeng/primeng";
import { APP_CONFIG } from "../../../core/model/app.config";


describe("EsriMapComponent", () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;
  const mapServiceSpy = {
    loadMap: () => {},
    loadWebMap: () => {},
  };
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EsriMapComponent],
        imports: [ProgressSpinnerModule],
        providers: [
          { provide: EsriMapService, useValue: mapServiceSpy },
          { provide: APP_CONFIG, useValue: { apiVersion: "4.6" } },
        ],
      }).compileComponents();
      // fausses fonctions loadMap/loadWebmap du EsriMapService.
      spyOn(mapServiceSpy, "loadMap").and.returnValue(Promise.resolve({map: {}, mapView: {}}));
      spyOn(mapServiceSpy, "loadWebMap").and.returnValue(Promise.resolve({map: {}, mapView: {}}));
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
    expect(component).toBeTruthy();
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
