import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AppModule } from "..";
import { APP_BASE_HREF } from "@angular/common";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import * as fromRoot from "./core/reducers/app.reducer";
import * as fromWidgets from "./widget/reducers/widgets.reducer";
import { combineReducers, StoreModule, select, Store } from "@ngrx/store";
import { AppState, getInitialState } from "./core/model/app.state";
import { LoadStateAction } from "./core/actions/core.actions";

describe("AppComponent", () => {
  let store: Store<AppState>;
  beforeEach(
    async(() => {
      return TestBed.configureTestingModule({
        declarations: [],
        imports: [
          AppModule,
          StoreModule.forRoot({
            ...fromRoot.appReducer,
            widgets: combineReducers(fromWidgets.widgetsReducer),
          }),
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
        schemas: [NO_ERRORS_SCHEMA],
      })
        .compileComponents()
        .then(() => {
          store = TestBed.get(Store);
          // surveille les appels à Store.dispatch et les laisse passer.
          spyOn(store, "dispatch").and.callThrough();
        });
    }),
  );

  beforeEach(() => {
    store.dispatch(new LoadStateAction(getInitialState()));
  });

  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );
  it(
    `Doit avoir le titre 'Maquette ergonomie'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual("Maquette ergonomie");
    }),
  );
});
