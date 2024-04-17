// Creating a Array
let userNames = ["Anabia", "Jannat", "Shajya", "Admin", "Kashmala"];

// Using ForEach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a special report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }    
})