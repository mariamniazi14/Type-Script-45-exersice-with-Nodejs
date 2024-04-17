// Define a Function to print each magician name from an array
function show_megician (magician: string[]){
    magician.forEach(name => console.log(name));
}

// Function to make magician graet through .map it will modify array
function make_graet(magician: string[]){
    return magician.map(name => `The Great ${name}`)
}

// Define an Array containing magician name
let magician_name = ["Harry Poter", "Jiulica", "Rose"]

// Making a copy of original array of through .slice() function
let copy_magician_names = magician_name.slice()

// Modify the copied array to include "the great" with thier names
let copy_great_magician = make_graet(copy_magician_names);

// Show both arrays original and copied

// Original
console.log("Original Array\n");
show_megician(magician_name);

// Copied
console.log("\nCopied Array\n");
show_megician(copy_great_magician);
