import { WidgetState } from "../model/widget-state";
import "rxjs/add/observable/of";
import { AppStoreService } from "../../core/services/app-store/app-store.service";
import { inject, TestBed } from "@angular/core/testing";
import { WidgetStateManager } from "./widget-state-manager.service";

describe("WidgetStateManager", () => {
  const widgets: WidgetState[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetStateManager, AppStoreService],
    });
  });

  it("is injectable", () => {
    inject([WidgetStateManager], widgetStateManager => {
      expect(widgetStateManager).toBeDefined();
    })();
  });
  it("addWidgetState()", () => {
    inject([WidgetStateManager], widgetStateManager => {
      widgetStateManager.addWidgetState();
    })();
  });

  it("closeAll()", () => {
    inject([WidgetStateManager], widgetStateManager => {
      widgetStateManager.closeAll();
    })();
    /*
    this.widgx*/
  });

  it("getWidgetStates()", () => {
    /*: Observable<WidgetState[]> {
    return Observable.of(this.widgets);
    */
  });

  it("getMaxZIndex()", () => {
    /*: number {
    return Math.max(...this.widgets.map(widget => widget.zIndex));
  */
  });
});
