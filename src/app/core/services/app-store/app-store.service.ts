import { Injectable } from "@angular/core";
import { AppState } from "../../models/app.state";
import { Store } from "@ngrx/store";
import * as CoreActions from "../../actions/core.actions";
import "rxjs/add/operator/take";
export const APP_STORE_KEY = "socle-state";

@Injectable()
export class AppStoreService {
  private state: any;

  constructor(private store: Store<any>) {
    this.store.take(1).subscribe(state => (this.state = state));
    this.restore();
    // enregistre l'état discrètement quand l'user quitte.
    window.onbeforeunload = event => {
      this.save();
    };
  }

  getState() {
    return this.state;
  }

  update(state) {
    console.log("UPDATE STATE ", state);
    Object.assign(this.state, state);
  }

  save() {
    this.store.take(1).subscribe(state => {
      window.localStorage.setItem(APP_STORE_KEY, JSON.stringify(state));
    });
  }

  restore() {
    const localState: AppState = JSON.parse(window.localStorage.getItem(APP_STORE_KEY));
    this.store.dispatch(new CoreActions.RefreshStateAction(localState));
  }

  destroy() {
    this.state = undefined;
  }
}
