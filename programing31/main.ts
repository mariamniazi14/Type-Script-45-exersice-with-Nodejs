let userNames = ["Anabia", "Jannat", "Shajya", "Admin", "Kashmala"]

userNames = []

if (userNames.length === 0){
    console.log("Y0ur array is Empty. We need to find some users!")
}else{
    // Using ForEach Loop on Array
    userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a special report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }    
})
}