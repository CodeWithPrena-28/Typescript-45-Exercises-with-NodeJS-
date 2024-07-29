// Making a Function
function make_Shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} Shirt With the ${printMessage} Prints on Shirt`);
}

//Calling a function with by_Default values
make_Shirt();

// Calling a function now with Medium size and Default Message
make_Shirt("Medium");

//Calling a Function Now With Small Size and Different Print Message
make_Shirt("Small", "I Love JavaScript")