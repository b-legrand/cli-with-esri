import { AppActionTypes, AppActions } from "../actions/core.actions";
import { Action } from "@ngrx/store";
import { getInitialState } from "../models/app.state";

/**
 * Réducteur racine / application;
 * @param state
 * @param {Action} action
 */
export function appReducer(state: any = getInitialState(), action: any) {
  switch (action.type) {
    case AppActionTypes.LoadState: {
      return state;
    }
    case AppActionTypes.RefreshState: {
      return Object.assign({}, action.state);
    }
    case AppActionTypes.SaveState: {
      return state;
    }
    default:
      return state;
  }
}
