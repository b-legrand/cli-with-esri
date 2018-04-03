import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetDrawComponent } from "./widget-draw.component";
import { WidgetModule } from "../../../widget/widget.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { EsriLoaderService } from "../../../map/services/esri-loader.service";

describe("WidgetDrawComponent", () => {
  let component: WidgetDrawComponent;
  let fixture: ComponentFixture<WidgetDrawComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetDrawComponent],
        providers: [EsriLoaderService],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
