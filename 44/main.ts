// Define a function  with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log("_" + singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 2 times with 3 different numbers of arguments
makeSandwich("Cheese","Capsicum", "Tikki", "Mayo");

makeSandwich("Bread", "Potato");

makeSandwich("Bread", "Butter", "cheese", "Mayo", "Potato Tikki", "Tomato", "Onion")