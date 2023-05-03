// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// Arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

//Callback function
const numbers: number[] = [1, 2, 3, 4, 5];

const squareNumbers: number[] = numbers.map((num: number): number => num * num);

// methods

const person: {
  name: string;
  age: number;
  balance: number;
  addBalance(amount: number): number;
} = {
  name: "Anik",
  age: 30,
  balance: 1,
  addBalance(amount) {
    return this.balance + amount;
  },
};

const newFriends: string[] = ["monica", "rachel", "pheobe"];
const myFriends: string[] = ["ross", "joey", "chandler"];

const greetFriends = (...friends: string[]): void => {
  friends.forEach((friend: string) => console.log(`Hello ${friend}`));
};

//spread operator
myFriends.push(...newFriends);
console.log(myFriends);

//rest operator
greetFriends(...myFriends);

//destructuring
/*
here explicit type does not work.
If you write explicit type, it will not allow in array destructuring.
In object destructuring, it will take as 'alias'
*/
const [bestFriend] = myFriends;
console.log(bestFriend); //expected output: ross

const anotherFriend = {
  fullName: "Anik Das",
  age: 30,
};

const { fullName } = anotherFriend;
console.log(fullName); // expected output: Anik Das

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}
