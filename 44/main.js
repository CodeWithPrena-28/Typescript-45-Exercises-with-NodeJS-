// Define a function  with a rest parameter that accept items arguments representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log("_" + singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 2 times with 3 different numbers of arguments
makeSandwich("Cheese", "Capsicum", "Tikki", "Mayo");
makeSandwich("Bread", "Potato");
makeSandwich("Bread", "Butter", "cheese", "Mayo", "Potato Tikki", "Tomato", "Onion");
