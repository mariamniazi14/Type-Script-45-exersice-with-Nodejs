// Creating a function with perameters which return a values in string
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
// Calling a function and print the retuned value
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("berlin", "Germany"));