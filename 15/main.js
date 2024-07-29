var guestList = ["Taqadus", "Asma", "Azmeena", "Amna"];
var dontCome = guestList[0];
console.log(dontCome, "Dont Come for dinner");
guestList.splice(0, 1, "Sadia");
guestList.forEach(function (Guest) { return console.log("Salam ".concat(Guest, ", Would you like to Dinner with me?")); });
