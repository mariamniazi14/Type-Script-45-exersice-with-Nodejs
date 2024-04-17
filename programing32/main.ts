// Array of current users
let current_users = ["Mariam", "Amna", "muskan", "Anusha", "Yashfa"]

// Array of new users
let new_users = ["Khuzaim", "Ali", "Muskan", "Aimal", "Anusha"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {
     
    // Making a condition for username already exists and save in our_condition veriable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()) 
    // Print different messages using if-else statments
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this user ${new_one_user} is availible`)
    }
})