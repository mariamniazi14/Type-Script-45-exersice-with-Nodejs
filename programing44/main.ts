// Define a function with a rest perameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItems => console.log(singleItems));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Chees", "Mayo", "Egg");

makeSandwich("Kechup", "Egg");

makeSandwich("Butter", "Jam", "bread");