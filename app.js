// Core Type of JavaScript
/*
    1. number - 1,3,5,1.5,1.9
    2. string - "Hi", 'Hi', `Hi`
    3. boolean - true, false
*/
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error("Incorrect input!!!");
    }
    return n1 + n2;
}
var number1 = '5';
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
