import { Action } from "@ngrx/store";
import { AppState } from "../model/app.state";

export enum AppActionTypes {
  LoadState = "[App] Load state",
  RefreshState = "[App] Refresh state",
  SaveState = "[App] Save state",
}

export class LoadStateAction implements Action {
  readonly type = AppActionTypes.LoadState;
  constructor(public payload: AppState) {}
}

export class RefreshStateAction implements Action {
  readonly type = AppActionTypes.RefreshState;
  constructor(public payload: AppState) {}
}

export class SaveStateAction implements Action {
  readonly type = AppActionTypes.SaveState;

  constructor(public payload: AppState) {}
}

export type AppActions = LoadStateAction | RefreshStateAction | SaveStateAction;
