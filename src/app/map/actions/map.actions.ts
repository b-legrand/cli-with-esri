import { Action } from "@ngrx/store";

export enum MapActionTypes {
  MOVE = "[Map] Move",
  ZOOM = "[Map] Zoom",
  RESET = "[Map] Reset",
}

export class Zoom implements Action {
  readonly type = MapActionTypes.ZOOM;
  constructor(public payload: number) {}
}

export class Move implements Action {
  readonly type = MapActionTypes.MOVE;
}

export class Reset implements Action {
  readonly type = MapActionTypes.RESET;

  constructor(public payload: number) {}
}

export type MapActions = Zoom | Move | Reset;
