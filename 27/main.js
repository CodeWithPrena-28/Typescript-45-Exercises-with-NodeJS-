//Define Variables
var alienColor = "Green";
//Using If and Else-If Statement
//Version 1
if (alienColor === "Green") {
    console.log("Version 1: you shot down Green Alien you have earned 5 Points");
}
else if (alienColor === "Yellow") {
    console.log("you shot down Yellow Alien you have earned 10 Points");
}
else if (alienColor === "Red") {
    console.log("you shot down Red Alien you have earned 15 Points");
}
//Version 2
var alienColor2 = "Yellow";
if (alienColor2 === "Green") {
    console.log("you shot down Green alien you have earned 5 Points");
}
else if (alienColor2 === "Yellow") {
    console.log("Version 2: you shot down Yellow alien you have earned 10 Points");
}
else if (alienColor2 === "Red") {
    console.log("you shot down Red alien you have earned 15 Points");
}
// Version 3
var alienColor3 = "Red";
if (alienColor3 === "Green") {
    console.log("you shot down Green alien you have earned 5 Points");
}
else if (alienColor3 === "Yellow") {
    console.log("you shot down Yellow alien you have earned 10 Points");
}
else if (alienColor3 === "Red") {
    console.log("Version 3: you shot down Red alien you have earned 15 Points");
}
