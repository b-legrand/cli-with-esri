import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetBookmarkComponent } from "./widget-bookmark.component";
import { WidgetModule } from "../../../widget/widget.module";
import { MapModule } from "../../../map/map.module";

describe("WidgetBookmarkComponent", () => {
  let component: WidgetBookmarkComponent;
  let fixture: ComponentFixture<WidgetBookmarkComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetBookmarkComponent],
        imports: [WidgetModule, MapModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
