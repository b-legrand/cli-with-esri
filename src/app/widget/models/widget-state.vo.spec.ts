import WidgetState, { initialWidgetState } from "./widget-state";

describe("WidgetState VO", () => {
  let widgetState: WidgetState;
  it("can be created", () => {
    widgetState = {
      folded: true,
      zIndex: 300,
      closed: true,
      anchored: false,
    };
    expect(widgetState).toBeDefined();
  });

  it("has a factory", () => {
    // execute
    widgetState = initialWidgetState();

    // verifie
    expect(widgetState.size).toBeDefined();
  });
});
