let guestList = ["Roman", "Rimsha", "Mahnoor", "Mariam"];

let dontCome = guestList[0];

console.log(dontCome, "nahi aa sakti");

guestList.splice(0, 1, "Anoosha");

guestList.forEach(guest => console.log (`Salam ${guest},would u like to Dinner with me?`));
