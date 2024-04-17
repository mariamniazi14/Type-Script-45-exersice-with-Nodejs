var guestList = ["Roman", "Rimsha", "Mahnoor", "Mariam"];
var dontCome = guestList[0];
console.log(dontCome, "nahi aa sakti");
guestList.splice(0, 1, "Anoosha");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ",would u like to Dinner with me?")); });
