//Describe a Function
function describe_City(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling the function
describe_City("Sanghar");
describe_City("Karachi");
describe_City("Berlin", "Germany");
