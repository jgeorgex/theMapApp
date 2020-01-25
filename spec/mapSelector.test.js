const selectCountry = require("../public/javascripts/mapSelector");

test("returs France when France is selected", () => {
  expect(selectCountry("France")).toBe("France");
});
