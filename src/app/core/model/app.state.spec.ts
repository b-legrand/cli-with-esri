import { AppState, getInitialState } from "./app.state";

describe("AppState", () => {

  let state: AppState;

  beforeEach(() => {
    state = getInitialState();
  });

  it("initialState() renvoie un appState", () => {
    expect(state).toBeDefined();
    expect(state.maps["default"]).toBeDefined();
    expect(state.widgets).toBe({});
  });

});
