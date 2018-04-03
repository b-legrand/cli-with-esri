import { defineSupportCode } from "cucumber";

defineSupportCode(({ Given, When, Then, Before }) => {
  let po: WidgetPageObject;

  Before(() => {
    po = new WidgetPageObject();
  });

  Given("I am on the angular.io site", () => app.navigateTo());

  When("I type '{term}' into the search input field", (text: string) =>
    app.enterSearchInput(text),
  );

  Then("I should see some results in the search overlay", () =>
    app
      .getSearchResultItems()
      .then(elems => expect(elems.length).to.be.greaterThan(0)),
  );
});
