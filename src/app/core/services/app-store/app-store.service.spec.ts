import { inject, TestBed } from "@angular/core/testing";

import { AppStoreService } from "./app-store.service";
import * as CoreActions from "../../actions/core.actions";
import { AppState } from "../../model/app.state";
import { Store, StoreModule } from "@ngrx/store";

import { appReducer } from "../../reducers/app.reducer";

const fakeState: AppState = {
  widgets: {
    "mon-faux-widget": {
      closed: false,
      folded: false,
      anchored: false,
      position: { left: 0, top: 0 },
      size: { width: 320, height: 240 },
    },
  },
};

describe("AppStoreService", () => {
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer)],
      providers: [AppStoreService],
    });
    store = TestBed.get(Store);
    // surveille les appels à Store.dispatch et les laisse passer.
    spyOn(store, "dispatch").and.callThrough();
  });

  beforeEach(() => {
    // remplit le store avec un faux état.
    store.dispatch(new CoreActions.LoadStateAction(fakeState));
  });

  it(
    "should be created",
    inject([AppStoreService], (service: AppStoreService) => {
      expect(service).toBeTruthy();
    }),
  );
});
