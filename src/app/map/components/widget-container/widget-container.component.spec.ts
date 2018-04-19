import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WidgetContainerComponent } from "./widget-container.component";
import { AnchorZoneComponent } from "..";
import { WidgetModule } from "../../../widget/widget.module";
import { WidgetStackService } from "../../services/widget-stack.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { EsriMapService } from "../../services/esri-map.service";
import EsriLoaderService from "../../services/esri-loader.service";
import { Store, StoreModule } from "@ngrx/store";
import { AppState } from "../../../core/models/app.state";
import { appReducer } from "../../../core/reducers/app.reducer";
import { AppStoreService } from "../../../core/services/app-store/app-store.service";

describe("WidgetContainerComponent", () => {
  let component: WidgetContainerComponent;
  let fixture: ComponentFixture<WidgetContainerComponent>;

  let store: Store<AppState>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [WidgetModule, PortalModule, StoreModule.forRoot(appReducer)],
        declarations: [WidgetContainerComponent, AnchorZoneComponent],
        providers: [WidgetStackService, EsriMapService, EsriLoaderService, AppStoreService],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();

      store = TestBed.get(Store);
      // surveille les appels à Store.dispatch et les laisse passer.
      spyOn(store, "dispatch").and.callThrough();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
