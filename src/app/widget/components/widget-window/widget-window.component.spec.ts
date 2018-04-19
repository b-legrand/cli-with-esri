import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { v4 } from "uuid";
import { WidgetWindowComponent } from "./widget-window.component";
import { WidgetHeaderComponent, WidgetPanelComponent } from "..";
import { Component, DebugElement, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import WidgetState from "../../models/widget-state";
import { WidgetConfig } from "../../models/widget-config";
import { By } from "@angular/platform-browser";
import { WidgetStackService } from "../../../map/services/widget-stack.service";
import { WidgetStateManager } from "../../services/widget-state-manager.service";
import { Store, StoreModule } from "@ngrx/store";
import { appReducer } from "../../../core/reducers/app.reducer";
import { AppState } from "../../../core/models/app.state";
import { AppStoreService } from "../../../core/services/app-store/app-store.service";
import { APP_CONFIG, AppConfig, DEFAULT_APP_CONFIG } from "../../../core/models/app.config";
import * as CoreActions from "../../../core/actions/core.actions";

// composant de test
@Component({
  template: `
        <widget-window key="test-widget-window"
                       [title]="'Mon widget'"
                       [icon]="'esri-icon-class'"
                       [config]="config"
        >Contenu du widget
        </widget-window>`,
})
class TestWidgetWindowComponent {
  @Input() public state: WidgetState;
  @Input() public config: WidgetConfig;
}

describe("WidgetWindowComponent", () => {
  let store: Store<AppState>;
  let component: TestWidgetWindowComponent;
  let fixture: ComponentFixture<TestWidgetWindowComponent>;
  let debugElement: DebugElement;
  const fakeState: AppState = {
    widgets: {
      "test-widget-window": {
        closed: false,
        folded: false,
        anchored: false,
        position: { left: 0, top: 0 },
        size: { width: 320, height: 240 },
      },
    },
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetWindowComponent, WidgetHeaderComponent, WidgetPanelComponent, TestWidgetWindowComponent],
        imports: [StoreModule.forRoot(appReducer)],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          WidgetStateManager,
          WidgetStackService,
          AppStoreService,
          { provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG },
        ],
      }).compileComponents();

      store = TestBed.get(Store);
      // surveille les appels à Store.dispatch et les laisse passer.
      spyOn(store, "dispatch").and.callThrough();
      store.dispatch(new CoreActions.RefreshStateAction(fakeState));
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWidgetWindowComponent);
    component = fixture.componentInstance;
    // remplit le store avec un faux état.
    fixture.detectChanges();
  });

  it("should create", () => {
    component.config = {
      name: "test-widget",
      uuid: v4(),
    };
    expect(component).toBeTruthy();
    debugElement = fixture.debugElement;
    debugElement.queryAll(By.css(".widget-panel"));
  });
});
