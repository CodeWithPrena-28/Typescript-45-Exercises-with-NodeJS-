//Creating an Array
var userNames = ["Taqadus", "Asma", "Admin", "Areesha", "Azmeena", "Amna"];
//Using ForEach Loop On Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status Report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
