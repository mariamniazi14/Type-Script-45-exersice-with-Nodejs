// Define a function with a rest perameter that accept items arguments representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Chees", "Mayo", "Egg");
makeSandwich("Kechup", "Egg");
makeSandwich("Butter", "Jam", "bread");
