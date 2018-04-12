import { Action } from "@ngrx/store";
import { WidgetAction, WidgetActionTypes } from "../actions/widget.actions";
import { AppState } from "../../core/model/app.state";
import { WidgetState } from "../model/widget-state";

export function widgetsReducer(state: AppState, action: WidgetAction) {
  switch (action.type /*
    case WidgetActionTypes.Init: {
      return {
        ...state,
        widgets: {
          ...state.widgets,
          [action.widgetKey]: action.payload.state,
        },
      };
    }
    case WidgetActionTypes.Open: {
      const { key } = action.payload;
      state.widgets[key] = {
        ...state.widgets[key],
        closed: false,
      };
      return {
        ...state,
      };
    }
    case WidgetActionTypes.Close: {
      const { key } = action.payload;
      state.widgets[key] = {
        ...state.widgets[key],
        closed: true,
      };
      return {
        ...state,
      };
    }
    case WidgetActionTypes.Anchor: {
      const { key } = action.payload;
      state.widgets[key] = {
        ...state.widgets[key],
        anchored: true,
      };
      return {
        ...state,
      };
    }
    case WidgetActionTypes.Release: {
      const { key } = action.payload;
      state.widgets[key] = {
        ...state.widgets[key],
        anchored: false,
      };
      return {
        ...state,
      };
    }
    case WidgetActionTypes.Fold: {
      const { key } = action.payload;
      state.widgets[key] = {
        ...state.widgets[key],
        folded: true,
      };
      return {
        ...state,
      };
    }
    case WidgetActionTypes.Unfold: {
      const { key } = action.payload;
      state.widgets[key] = {
        ...state.widgets[key],
        folded: false,
      };
      return {
        ...state,
      };
    }
    case WidgetActionTypes.CloseAll: {
      const closeWidget: (
        widgetState: WidgetState,
      ) => WidgetState = widgetState => {
        return {
          ...widgetState,
          closed: true,
        } as WidgetState;
      };
      console.log(state);
      return {
        ...state,
        // widgets: state.widgets.map(closeWidget),
      };
    }*/) {
    default:
      return state;
  }
}
