//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// true --- <= 0
//false ---- otherwise

function lessThanOrEqual(num) {
    if (num <= 0) {
        return true;
    } else {
        return false
    }
}
console.log(lessThanOrEqual(5));
console.log(lessThanOrEqual(0));
console.log(lessThanOrEqual(-2));