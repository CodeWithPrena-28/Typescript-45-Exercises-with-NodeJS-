// Array of Current_Users
let current_users = ["Taqadus", "asma", "Areesha", "Azmeena", "Amna"]

// Array of New_Users
let new_users = ["Prena","Azmeena","Taqadus", "Sehar","Asma"]

// Loop Through new_Users to check for Usernames Availbility
new_users.forEach(new_one_user =>{

    // Making a Condition for username already exist and save in Our_Condition Variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
     
    // Print Different message using If_Else Statement
    if(our_condition){
        console.log(`Sorry ${new_one_user} is Already Taken!`);
     }else{
        console.log(`This Username ${new_one_user} is Available`);
     }
})






