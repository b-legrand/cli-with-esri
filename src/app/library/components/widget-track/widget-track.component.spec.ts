import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetTrackComponent } from "./widget-track.component";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetTrackComponent", () => {
  let component: WidgetTrackComponent;
  let fixture: ComponentFixture<WidgetTrackComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetTrackComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
