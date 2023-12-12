// Import functions from Details folder
const getAttributes = require("./Details/getAttributes");
const getAge = require("./Details/getAge");
const getCountry = require("./Details/getCountry");
const getName = require("./Details/getName");
const getWork = require("./Details/getWork");
const getMore = require("./Details/getMore");
// Function to return json with those details
function generateDetails(pref) {
  // generate gender 50/50
  const gender = Math.random() < 0.5 ? "Male" : "Female";
  return {
    name: getName(gender),
    age: getAge(pref.minAge, pref.maxAge),
    attributes: getAttributes(),
    from: getCountry(),
    work: getWork(),
    gender,
    ...getMore(),
  };
}
module.exports = generateDetails;
