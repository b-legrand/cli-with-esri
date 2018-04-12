import { appReducer } from "./app.reducer";
import { getInitialState } from "../model/app.state";

describe("App reducer", () => {
  it("doit renvoyer l'état initial", () => {
    const initialState = getInitialState();
    const action = {};
    // execute
    expect(appReducer(undefined, action)).toEqual(initialState);
  });

  describe("LOAD_STATE Action", () => {
    it("Change l'état ", () => {});
  });
});
