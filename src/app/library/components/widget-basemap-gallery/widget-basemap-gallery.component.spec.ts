import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetBasemapGalleryComponent } from "./widget-basemap-gallery.component";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetBasemapGalleryComponent", () => {
  let component: WidgetBasemapGalleryComponent;
  let fixture: ComponentFixture<WidgetBasemapGalleryComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetBasemapGalleryComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBasemapGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
