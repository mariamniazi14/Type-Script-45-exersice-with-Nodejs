// Define a Function to print each magician name from an array
function show_megician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to make magician graet through .map it will modify array
function make_graet(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// Define an Array containing magician name
var magician_name = ["Harry Poter", "Jiulica", "Rose"];
// Making a copy of original array of through .slice() function
var copy_magician_names = magician_name.slice();
// Modify the copied array to include "the great" with thier names
var copy_great_magician = make_graet(copy_magician_names);
// Show both arrays original and copied
// Original
console.log("Original Array\n");
show_megician(magician_name);
// Copied
console.log("\nCopied Array\n");
show_megician(copy_great_magician);
