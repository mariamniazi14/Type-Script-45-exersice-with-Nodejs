// Creating a Guest List Array
var guestList = ["Mahnoor", "Rimsha", "Roman", "Mariam"];
// Making veriable for those who dont come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Nahi Aa Sakte han");
// Add or Remove veleus from Guest List Array
guestList.splice(0, 1, "Anusha");
// Message print for bigger table
console.log("Good News ! We have found a Bigger Teble for Dinner.");
// Adding a new velue at stating index of array
guestList.unshift("Eman");
// Adding a new velue at ending index of array
guestList.push("Dua");
// Get a middelindex of our guset list array
var middelEndex = Math.floor(guestList.length / 2);
// Adding a new geust to middel index of array
guestList.splice(middelEndex, 0, "Fatima");
// Print message of updated list 
console.log("Updated List of our Guest");
// Seding a invitation message to our guest one by one with thier names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me")); });
