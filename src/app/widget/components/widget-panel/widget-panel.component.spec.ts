import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetPanelComponent } from "./widget-panel.component";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { APP_CONFIG } from "../../../core/models/app.config";

describe("WidgetPanelComponent", () => {
  let component: WidgetPanelComponent;
  let fixture: ComponentFixture<WidgetPanelComponent>;
  let debugElement: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetPanelComponent],
        providers: [{ provide: APP_CONFIG, useValue: { themeColor: "black" } }],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css(".widget-panel"));
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('should have a resizable button when [resizable]="true"', () => {
    expect(component).toBeTruthy();
    component.resizable = true;
    fixture.detectChanges();
    const resizeButton = debugElement.query(By.css(".widget-resize-button"));
    expect(resizeButton).toBeDefined();
  });

  it('should not have a resizable button when [resizable]="false"', () => {
    expect(component).toBeTruthy();
    component.resizable = false;
    fixture.detectChanges();
  });
});
