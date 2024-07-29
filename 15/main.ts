let guestList = ["Taqadus", "Asma", "Azmeena", "Amna"];

let dontCome = guestList[0];

console.log(dontCome, "Dont Come for dinner");

guestList.splice(0, 1, "Sadia")

guestList.forEach(Guest => console.log(`Salam ${Guest}, Would you like to Dinner with me?`))