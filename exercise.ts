/* convert this javascript into typescript
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
 
let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself); */

let bankAccount: {money: number, deposit:(value: number) => void} = { // void since is not returning nothing the function 
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};
 
let myself: {name: string, bankAccount: {money: number, deposit:(value: number) => void}, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself);



// Exercise 1 - Maybe use an Arrow Function?
let double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
let greetings = function (name: string = "John") {
    console.log("Hello, " + name);
};
greetings();
greetings("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));


// Exercise 4 - I have to think about Exercise 3 ...
const newArray = [55, 20, ...numbers];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);
console.log(newArray);


// Exercise 5 - That's a well-constructed array.
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(testResults);


// Exercise 6 - And a well-constructed object!
const scientist = {firstName: "Will", experience: 12};
const {firstName: userFirstName, experience: yearsExperience} = scientist;
console.log(userFirstName, yearsExperience);
