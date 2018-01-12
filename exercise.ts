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
