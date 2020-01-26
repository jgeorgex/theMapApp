const { getCode, getName } = require("country-list");

console.log(getName("IS")); // Iceland
console.log(getCode("Iceland")); // IS
console.log(getCode("Nowhere-to-be-found-land")); // undefined

function selectCountry(country) {
  return country;
}

module.exports = selectCountry;
