// Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Usin For-loop
for(let oneNumber of numbers){
    let ordinelEnding: string;

    if(oneNumber === 1){
        ordinelEnding = "st"
    }
    else if(oneNumber === 2){
        ordinelEnding = "nd"
    }
    else if (oneNumber === 3){
        ordinelEnding = "rd"
    }
    else{
        ordinelEnding = "th"
    }

    console.log(`${oneNumber}${ordinelEnding}`)
}