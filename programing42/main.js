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
var great_magician = make_graet(magician_name);
show_megician(great_magician);
