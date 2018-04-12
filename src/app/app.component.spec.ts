import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AppModule } from "..";
import { APP_BASE_HREF } from "@angular/common";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import * as fromRoot from "./core/reducers/app.reducer";
import * as fromWidgets from "./widget/reducers/widgets.reducer";
import { combineReducers, StoreModule, select } from "@ngrx/store";

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
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
      }).compileComponents();
    }),
  );
  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );
  it(
    `should have as title 'app'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual("Maquette ergonomie");
    }),
  );
  it(
    "should render title in a h1 tag",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("h1").textContent).toContain(
        "Maquette ergonomie",
      );
    }),
  );
});
