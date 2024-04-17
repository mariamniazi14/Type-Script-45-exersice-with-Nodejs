"use strict";
// Making a Function
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a Function with By-Default Values
make_shirt();
// Calling a Function now with medium size and default message 
make_shirt("Medium");
// Calling a Function now with small size and also different print message
make_shirt("Small", "I Love JavaScript");
