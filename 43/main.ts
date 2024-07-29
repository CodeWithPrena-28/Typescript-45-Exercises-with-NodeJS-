// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Functions to make magicians great through .map() it will modify array
function make_great(magicians: string []){
    return magicians.map(name => `The Great ${name}`)
}

// Define an array of magicians name
let magician_names = ["Harry Poter", "Prena", "Hansraj"]

// Making a copy of Original Array through .slice() function

let copy_magicians_name = magician_names.slice()

// Modify the copied array to include "The Great" with their names

let copy_great_magicians = make_great(copy_magicians_name);

// Show both arrays Original and Copied

// Original
console.log("\nOriginal Array\n");
show_magicians(magician_names);

// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);