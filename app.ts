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


// function types 
// we can set the type of a function to only receive functions that would return something and that also have parameters
let myMultiply: (val1: number, val2: number) => number;
/* ^ to set up the function type we use parenthesis 
    THIS IS NOT A FUNCTION I WONT BE ABLE TO EXECUTE IT
    It indicates which functions this variable would be able to hold */
myMultiply = multiply;
console.log(myMultiply(3, 2));


// Object types
let userData: {name: string, age: number} = {
    name: "Vanessa",
    age: 39
}


// complex object
let complex: {data: number[], output: (all: boolean) => number[] } = {
    /* ^ object that would have data and output property and names should match
        the data property should be an array of numbers and the output property is a function
        where there is only 1 argument with the name of all and the type is boolean and should 
        give back => an array of numbers[]
    */
    data: [100, 98, 45],
    output: function(all: boolean): number[] {
        return this.data
    }
}

// in the case of wanting to reuse a type theres 
// type alias
type Complex = {data: number[], output: (all: boolean) => number[] };
// Complex is the name of the type alias

let complex2: Complex = {
    data: [100, 98, 45],
    output: function(all: boolean): number[] {
        return this.data
    }
}

// union types 
let myRealRealAge: number | string = 27;
// ^ means it could only be a number or a string nothing else
myRealRealAge = "27";