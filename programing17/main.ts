// Creating a Guest List Array
let guestList = ["Mahnoor", "Rimsha", "Roman", "Mariam"];

// Making veriable for those who dont come
let dontCome = guestList[0];

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
let middelEndex: number = Math.floor(guestList.length / 2);

// Adding a new geust to middel index of array
guestList.splice(middelEndex, 0, "Fatima");

// Print message of updated list 
console.log("Updated List of our Guest");

// Seding a invitation message to our guest one by one with thier names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me`));

//inform that only tow guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two guest to dinner with me");

//using the while loop to remove guest from the array until only two names remain
while(guestList.length > 2) {
let removedguest = guestList.pop();
console.log(`Sorry, ${removedguest} I cant invite you to dinner`);
}
// Sending the invitation to the last two guest on the list
console.log("Invitation to the last two Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);