//Creating an Array
let userNames = ["Taqadus", "Asma","Admin", "Areesha", "Azmeena", "Amna"];

//Using ForEach Loop On Array

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status Report?`);
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})

