// Making a array of countries and print its original order
let countriesToVisit: string[] = ["Turkey", "France", "China", "Indoneshia"];
 console.log("Original order:", countriesToVisit);

 // Print the array in alphabetical order without modifying the actual array list
 console.log("Alphabetical order:", [...countriesToVisit].sort());

 // Show that the array is still in its original order
 console.log("Still in Original order:", countriesToVisit);

 // Print the array in riversed order without modifying the actual array list
 console.log("Riverse order:", [...countriesToVisit].reverse());
 
 // Show that the array is still in its original order
 console.log("Still in Original order:", countriesToVisit);

 // We have changed the original array now 
 console.log("Original Array Riversed:", countriesToVisit.reverse());

 // Print the array to show that its back to its original order 
 console.log("Back to Original Order:", countriesToVisit.reverse());

 // Print the array to show that its order has been changed in alphabetical order now
 console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

 // We have changed again the original array now in reverse order again
 console.log("Original Array Riversed Again:", countriesToVisit.reverse());

