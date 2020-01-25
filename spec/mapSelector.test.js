const selectCountry = require("../public/javascripts/mapSelector");

test("adds 1 + 2 to equal 3", () => {
  expect(selectCountry("France")).toBe("France");
});
