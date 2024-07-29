// Making a Function
function make_Shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " Shirt With the ").concat(printMessage, " Prints on Shirt"));
}
//Calling a function with by_Default values
make_Shirt();
// Calling a function now with Medium size and Default Message
make_Shirt("Medium");
//Calling a Function Now With Small Size and Different Print Message
make_Shirt("Small", "I Love JavaScript");
