// Array of Current_Users
var current_users = ["Taqadus", "asma", "Areesha", "Azmeena", "Amna"];
// Array of New_Users
var new_users = ["Prena", "Azmeena", "Taqadus", "Sehar", "Asma"];
// Loop Through new_Users to check for Usernames Availbility
new_users.forEach(function (new_one_user) {
    // Making a Condition for username already exist and save in Our_Condition Variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different message using If_Else Statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is Already Taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is Available"));
    }
});
