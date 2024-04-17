// Array of current users
var current_users = ["Mariam", "Amna", "muskan", "Anusha", "Yashfa"];
// Array of new users
var new_users = ["Khuzaim", "Ali", "Muskan", "Aimal", "Anusha"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exists and save in our_condition veriable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using if-else statments
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this user ".concat(new_one_user, " is availible"));
    }
});
