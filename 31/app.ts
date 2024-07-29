//Creating a Array with 5 Values
let userNames = ["Taqadus", "Asma","Admin", "Areesha", "Azmeena", "Amna"];

//Remove all values from our Array,  Now our is Empty
userNames = []

//If Statement for checking lenght of our Array is Empty?
if (userNames.length === 0){
    console.log("Your Array is Empty We Need To Find Some Users!");
}else {
    //If Array is Not Empty Using ForEach Loop On Array
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, Would you like to see a status Report?`);
        }else{
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    })
}