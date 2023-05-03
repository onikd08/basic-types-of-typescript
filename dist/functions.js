"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
// Arrow function
const addArrow = (num1, num2) => num1 + num2;
//Callback function
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map((num) => num * num);
// methods
const person = {
    name: "Anik",
    age: 30,
    balance: 1,
    addBalance(amount) {
        return this.balance + amount;
    },
};
//spread operator
const newFriends = ["monica", "rachel", "pheobe"];
const myFriends = ["ross", "joey", "chandler"];
myFriends.push(...newFriends);
console.log(myFriends);
