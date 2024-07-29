var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and print its Original Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Afghanistan"];
console.log("Original Order", countriesToVisit);
// Print the Array in Alphabetical order without Modifying the Actual Array List 
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the Array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);
// Print the Array in Reversed order without Modifying the Actual Array List 
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the Array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);
// We have changed the Original array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print the array t show that it's back to its Original Order
console.log("Back to Original Order:", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabetical Order Now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have changed Again the Original array Order Now reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
