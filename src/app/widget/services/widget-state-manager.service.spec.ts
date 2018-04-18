import { WidgetState } from "../model/widget-state";
import "rxjs/add/observable/of";
import { AppStoreService } from "../../core/services/app-store/app-store.service";
import { async, inject, TestBed } from "@angular/core/testing";
import { WidgetStateManager } from "./widget-state-manager.service";
import { StoreModule } from "@ngrx/store";
import { appReducer } from "../../core/reducers/app.reducer";

describe("WidgetStateManager", () => {
  let state: { widgets: { [widgetKey: string]: WidgetState } };

  let appStoreServiceSpy: AppStoreService;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [StoreModule.forRoot(appReducer)],
        providers: [WidgetStateManager, AppStoreService],
      });
      appStoreServiceSpy = TestBed.get(AppStoreService);
    }),
  );

  beforeEach(() => {
    state = {
      widgets: {
        "widget-alpha": {
          zIndex: 42,
          closed: false,
          folded: true,
          anchored: true,
        },
        "widget-omega": {
          closed: false,
          folded: true,
          anchored: true,
        },
      },
    };
    spyOn(appStoreServiceSpy, "getState").and.returnValue(state);
  });
  it("is injectable", () => {
    inject([WidgetStateManager], widgetStateManager => {
      expect(widgetStateManager).toBeDefined();
    })();
  });

  it("closeAll() doit passer tous les flag closed à true", () => {
    inject([WidgetStateManager], widgetStateManager => {
      widgetStateManager.closeAll();
      expect(state.widgets["widget-alpha"].closed).toBe(true);
      expect(state.widgets["widget-omega"].closed).toBe(true);
    })();
  });

  it("getMaxZIndex() doit renvoyer 42", () => {
    inject([WidgetStateManager], widgetStateManager => {
      expect(widgetStateManager.getMaxZIndex()).toBe(42);
    })();
  });
});
