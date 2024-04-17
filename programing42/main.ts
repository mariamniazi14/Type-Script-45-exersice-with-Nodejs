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

let great_magician = make_graet(magician_name)

show_megician(great_magician)