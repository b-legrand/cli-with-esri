import { ActionReducer, MetaReducer } from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { AppActionTypes } from "../actions/core.actions";

/**
 * Réducteurs de haut niveau, comme les higher order component.
 *
 * @param reducer
 * @returns a reducer
 */
export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any) => {
    if (action.type === AppActionTypes.RefreshState) {
      return action.payload;
    }
    return reducer(state, action);
  };
}
/**
 * Logger de debug.
 */
export function debugLogger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any) => {
    console.group(action.type);
    const nextState = reducer(state, action);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(
      `%c next state`,
      `color: #4CAF50; font-weight: bold`,
      nextState,
    );
    console.groupEnd();
    return nextState;
  };
}

// exporte
let _metaReducers: Array<MetaReducer<any>> = [debugLogger];

if (environment.hmr) {
  _metaReducers = [stateSetter, debugLogger];
}

export const metaReducers = _metaReducers;
