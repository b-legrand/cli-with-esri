import { Action } from "@ngrx/store";
import { AppState } from "../../core/model/app.state";

export function mapsReducer(state: AppState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
