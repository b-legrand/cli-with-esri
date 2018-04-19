import { Action } from "@ngrx/store";
import { AppState } from "../../core/models/app.state";

export function mapsReducer(state: AppState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
