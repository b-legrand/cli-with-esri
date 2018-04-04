import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetGeolocationComponent } from "./widget-geolocation.component";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetGeolocationComponent", () => {
  let component: WidgetGeolocationComponent;
  let fixture: ComponentFixture<WidgetGeolocationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetGeolocationComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
