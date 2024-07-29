// Creating a guest list Array
var guestList = ["Taqadus", "Asma", "Azmeena", "Amna"];
// Making variable dor those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "don't come for diner");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Sadia");
// Message Print for Bigger Table
console.log("Good News! We have Found a Bigger Table For Dinner");
// Adding a new value at Starting index of Array
guestList.unshift("Humaira");
// Adding a new value at Ending index of Array
guestList.push("Disha");
// Get a Middle index of our guest list Array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to Middle index of Array
guestList.splice(middleIndex, 0, "Areesha");
// Print Message of Upload List
console.log("Upload list of our Guest");
// Sending a invitation message to our guest one by one with thier names
guestList.forEach(function (oneGuest) { return console.log("Salam ".concat(oneGuest, ", Would you like to dinner with me")); });
// Inform that only two Guests can be invited for Dinner
console.log("unfortunatily, The new table dinner won't arrive on time, so i can invite only two Guest to Dinner with me");
//Using while loop to remove Guests from the Array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I Can't invite you to Dinner"));
}
// Sending a invitations to the last two guest on the list
console.log("Invitations to the Last two Guests");
guestList.forEach(function (lastTwo) { return console.log("Luckily ".concat(lastTwo, ", You are Still invited to Dinner")); });
//Removing last two Guests from the list
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
