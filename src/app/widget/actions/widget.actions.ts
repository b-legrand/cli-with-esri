import { Action } from "@ngrx/store";
import { WidgetState } from "../models/widget-state";

export enum WidgetActionTypes {
  Init = "[Widget] Init",
  Move = "[Widget] Move",
  Resize = "[Widget] Resize",
  Fold = "[Widget] Fold",
  Unfold = "[Widget] Unfold",
  Anchor = "[Widget] Anchor",
  Release = "[Widget] Release",
  Open = "[Widget] Open",
  Close = "[Widget] Close",
  CloseAll = "[Widget] CloseAll",
}

export interface WidgetAction extends Action {
  payload: { key } | any;
}

export class WidgetInit implements WidgetAction {
  readonly type = WidgetActionTypes.Init;
  constructor(public payload: { key: string; state?: WidgetState }) {}
}

export class WidgetMove implements WidgetAction {
  readonly type = WidgetActionTypes.Move;
  constructor(public payload: { key: string; dx: number; dy: number }) {}
}

export class WidgetResize implements WidgetAction {
  readonly type = WidgetActionTypes.Resize;
  constructor(public payload: { key: string; width: number; height: number }) {}
}

export class WidgetFold implements WidgetAction {
  readonly type = WidgetActionTypes.Fold;

  constructor(public payload: { key: string }) {}
}

export class WidgetUnfold implements WidgetAction {
  readonly type = WidgetActionTypes.Unfold;

  constructor(public payload: { key: string }) {}
}

export class WidgetOpen implements WidgetAction {
  readonly type = WidgetActionTypes.Open;

  constructor(public payload: { key: string }) {}
}

export class WidgetClose implements WidgetAction {
  readonly type = WidgetActionTypes.Close;

  constructor(public payload: { key: string }) {}
}

export class WidgetAnchor implements WidgetAction {
  readonly type = WidgetActionTypes.Anchor;

  constructor(public payload: { key: string }) {}
}

export class WidgetRelease implements WidgetAction {
  readonly type = WidgetActionTypes.Release;

  constructor(public payload: { key: string }) {}
}

export class WidgetCloseAll implements WidgetAction {
  readonly type = WidgetActionTypes.CloseAll;

  constructor(public payload: { key: string }) {}
}
/**
 * Exporte un alias des types pour que les réducteurs puissent les gérer simplement.
 */
export type WidgetActions =
  | WidgetInit
  | WidgetResize
  | WidgetMove
  | WidgetUnfold
  | WidgetFold
  | WidgetOpen
  | WidgetClose
  | WidgetAnchor
  | WidgetRelease
  | WidgetCloseAll;
