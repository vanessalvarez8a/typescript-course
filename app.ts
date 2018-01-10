// assign a variable to any
let myRealAge: any;
myRealAge = 23;
myRealAge = '34';

// to give a type to an array, is still needs to be an array
let hobbies: any[] = ["rowing", "coding"];
hobbies = [50];

//tupples are arrays with mixed types and a limited number of items
// the order were the tuples are set in the array are important most match
let address: [string, number] = ["Superstreet", 99];

//enum
enum Color {
    Gray, // receives the number 0 for its position
    Blue, // 1
    Red, // 2
    yellow = 100, // must be a 3 but we can overwite it with whatever we want like this
    // once is set it to 100 the folowing would be 101 but we can overwrite it with
    green = 4
}

let myColor: Color = Color.Blue;
console.log(myColor); // the console would be 1


// any - try to avoid any be always specific about the typeof 
let car: any = "BMW";
car = {brand: "BMW", series: 3};
console.log(car);


//set types to functions 
let myName = "Vanessa";

function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void type function
function sayHello(): void { // there is nothing to be returned
    // this will throw an error if I would try and return something inside this function
    // return myName;
    // void in a function is useful to apply it when you dont want to return anything 
}

// argument types
function multiply(num1: number, num2: number): number { //end result be a number 
    return num1 * num2;
}

console.log(multiply(2, 4));
// console.log(multiply(2, "hi")) would throw and error since hi is a string and num2 should be a number