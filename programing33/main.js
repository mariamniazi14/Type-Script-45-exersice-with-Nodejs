// Creating a Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// Usin For-loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinelEnding = void 0;
    if (oneNumber === 1) {
        ordinelEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinelEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinelEnding = "rd";
    }
    else {
        ordinelEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinelEnding));
}
