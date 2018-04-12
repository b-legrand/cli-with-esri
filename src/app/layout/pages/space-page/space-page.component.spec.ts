import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { SpacePageComponent } from "./space-page.component";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

describe("SpacePageComponent", () => {
  let component: SpacePageComponent;
  let fixture: ComponentFixture<SpacePageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SpacePageComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              params: Observable.of({ id: "42" }),
            },
          },
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
