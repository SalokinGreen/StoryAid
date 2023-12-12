// Import functions from Details folder
import getAttributes from "./Details/getAttributes";
import getAge from "./Details/getAge";
import getCountry from "./Details/getCountry";
import getName from "./Details/getName";
import getWork from "./Details/getWork";
import getMore from "./Details/getMore";
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
export default generateDetails;
