"use strict";
// // // // // /Functional programming
// // //  //is a paradigm that emphasizes pure functions, immutable data, and 
// // // // // // function composition to create predictable, reusable, and composable code. It avoids changing
// // // // // //  state and mutable data, instead using recursion and higher-order functions to solve problems. 
// // // // // //  This approach enables easier debugging, improved code reuse, and better parallelization.
// // // // 2. Understand functional programming concepts
// // // Immutable Data
// // // Immutable data refers to data that cannot be changed once it's created. In TypeScript, you can achieve immutability by using:
// 1. Const: Declare variables with const to prevent reassignment.
// 2. Readonly: Use the readonly keyword to prevent modification of properties.
// 3. Frozen Objects: Use Object.freeze() to prevent modification of an object's properties.
// 4. Immutable Libraries: Use libraries like Immutable.js to create immutable data structures.
// // // Pure Functions
// // // Pure functions are functions that:
// // // 1. Return the same output given the same inputs.
// // // 2. Have no side effects (e.g., modifying external state or throwing exceptions).
// // // In TypeScript, you can write pure functions by:
// // // 1. Avoiding mutations: Don't modify external state or function arguments.
// // // 2. Using only inputs: Only rely on function inputs, not external state.
// // // 3. Returning a new value: Return a new value instead of modifying an existing one.
// // // Example:
// // // // Immutable data
//  const PI: readonly number = 3.14;
// // // // Pure function
// // // function add(a: number, b: number): number {
// // //   return a + b;
// // // }
// // // Benefits of immutable data and pure functions:
// // // - Predictability: Easier to reason about code behavior.
// // // - Thread safety: No risk of data corruption in concurrent environments.
// // // - Testability: Easier to write unit tests.
// // // - Code simplicity: Fewer side effects and easier to understand code.
// // // // // // // Function Composition
// // // // // // // //to combining two or more functions to create one new function
// // // // // // // function double(x:number):number {return x*2;}
// // // // // // // function increment (x:number):number {return x+1;}
// // // // // // // // function doubleThenIncrement(x:number):number {return increment(double(x));}
// // // // // // // console.log(doubleThenIncrement(5));
// function formatName(name:string) {
//   return {
//     lowercase: name.toLowerCase(),
//     uppercase: name.toUpperCase(),
//     titleCase: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
//   };
// }
// console.log(formatName("ali"));
// // // // // // // function increment (x:number):number {return x+1;}
// // // // // // // function double(x:number):number {return x*2;}
// // // // // // // function doubleThenIncrement(x:number):number {return double(increment(x));}
// // // // // // // consol--==e.log(doubleThenIncrement(5));
// // // // // // //HIGHER ORDER FUNCTION
// // // // // // A higher-order function (HOF) is a function that:
// 1. Takes another function as an argument (i.e., a callback)
// 2. Returns a function as its output
// // // // // // function logger(callback: (message: string) => void): void {
// // // // // //     callback('Hello, World!');
// // // // // //   }
// // // // // //   function printMessage(message: string): void {
// // // // // //     `console.log(message);`
// // // // // //   }
// // // // // //   logger(printMessage);
// // //><-------------------------------><--------------------------------------------------------><
// // // Phase 2: Functional Programming Building Blocks
// // // // // // Common examples of higher-order functions include:
// 1. map()
// 2. filter()
// 3. reduce()
// 4. forEach()
// 5. setTimeout() and setInterval()
// // // // // // // Map(
// // // // // // 
// In TypeScript, map is a higher-order function that applies a given function to each element of 
// an array or other iterable, returning a new array with the transformed elements.
// The map function returns a new array containing the results of applying the callback function to
// each element in the original array.
// // // // // The map function takes two arguments:
// // // // // 1. callback: a function that takes an element as an argument and returns a transformed element
// // // // // 2. thisArg (optional): the value to use as this when calling the callback function
// // // // const numbers = [1,2,3,4,5,6];
// // // // const doublednumber =numbers.map( (num) => num*2);
// // // // console.log(doublednumber); //OUTPUT: [ 2, 4, 6, 8, 10, 12 ]
// // // // const numver = [1,2,3,4,5];
// // // // let x= numver.map( (num)=> num*2);
// // // // console.log(x);
// // // const words = ['ali zaid!'];
// // // const a = words.map( (word) => word.toUpperCase());
// // // console.log(a);//[ 'ALI ZAID!' ]
// // // // Extract object properties:
// // // const users = [{name:'Ali' , age:17},{name:"Fizza", age:15}];
// // // const b = users.map((user) => user.name);
// // // console.log(b);
// // // // reduce ()
// The reduce() function in TypeScript is a powerful array method that applies a function
// to each element of the array, reducing it to a single output value.
// // // Basic Syntax
// arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// // // Parameters
// // // - callback: Function to execute on each element
// // // - accumulator: Accumulated value returned in each iteration
// // // - currentValue: Current element being processed
// // // - currentIndex: Index of the current element
// // // - array: The original array
// // // - initialValue: Optional initial value for the accumulator
// // // Example 1: Sum of Numbers
// // // const numfer =[1,2,4,4,5,6,7,8,9,0];
// // // const c = numfer.reduce( (a,b)=> a + b,0);
// // // console.log(c);
// // // Example 2: Concatenate Strings
// // // const words = ['hello','world','typescript'];
// // // const d = words.reduce((a,b) => a+b);
// // // console.log(d);
// // 1. filter():
// // Creates a new array with only the elements that pass a test implemented by a provided function.
// // Example:
// const Numbers = [1,2,3,4,5,6,7,8,9,0];
// const isEven = Numbers.filter( a => a%2 ===0);
// console.log(isEven);
// //Task 2: Filter out strings that start with a l
// //Given an array of strings, use filter() to create a new array that only includes the strings that
// // start with a consonant.
// // const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "mangoo"];
// // const consonantStrings = strings.filter(str => {
// //   const firstLetter = str[0].toLowerCase();
// //   return !["a", "e", "i", "o", "u"].includes(firstLetter);
// // });
// // console.log(consonantStrings);
// //Given an array of objects, use filter() to create a new array that only includes the objects
// // where the status property is set to "active".
// // const objects = [
// //     {name: 'Ali', status:'active'} ,
// //     {name: 'Abdul Rahman', status:'active'},
// //     {name: 'Fizza', status:'active'},
// //     {name: 'Jinah', status:'inactive'},
// //     {name: 'Umar', status:'inactive'},
// // ]
// // const activeObjects = objects.filter(obj => obj.status === "active");
// // console.log(activeObjects);
// //Given an array of numbers, use filter() to create a new array that only includes the numbers
// // // that are outside the range of 10-20.
// // const numbers = [3,5,7,9,1,34,16,22,56];
// // const RangeofNumber = numbers.filter(num => num<20)
// // console.log(RangeofNumber);
// //Given an array of objects, use filter() to create a new array that only includes the objects where the value
// // property is greater than 50.
// // const Property = [{name:'ali',property:10 },
// //                   {name:'zaid',property: 20},
// //                   {name:'maryam',property: 40},
// //                   {name:'fizza',property:55 },
// //                   {name:'faiz',property:50 }];
// //                   const fifty = Property.filter(obj=> obj.property >50);
// //                   console.log(fifty);
// Given an array of strings, use filter() to create a new array that only includes the strings
//  that do not contain the substring "foo".
// const babe = ['Hello','foo','Bravo!'];
// const exceptFoo = babe.filter(foo => babe .(foo) );
// console.log(exceptFoo);
// 1. forEach():
// Calls a function for each element in the array, without returning a new array.
//works
//forEach takes a callback function as an arguement.
//the callback function is called for each element in the array
//the callback function recieves the current element, index,  and the entire array as arguement(in that order)
//SYNTAX
//array.forEach(callbackFunction)
//
// Example:
// const numbers =[1,2,3,4,5];
// numbers.forEach( (num,index) => numbers[index]=num*2);
// console.log(numbers);
// const fruits = ['apple','banana','mango'];
// fruits.forEach(fruit => {
//     console.log(fruit);
// })
// The setTimeout function in TypeScript is a global function that executes a provided function
//  or code snippet after a specified delay (in milliseconds). Here's a step-by-step explanation with 
//  examples:
// // Basic Syntax
// // setTimeout(callback, delay, [arg1, arg2, ...])
// // Parameters
// // - callback: Function to execute after the delay
// // - delay: Time in milliseconds to wait before executing the callback
// // - arg1, arg2, ...: Optional arguments to pass to the callback function
// // const timeoutId = setTimeout(() => console.log("This will not be logged"), 2000);
// // clearTimeout(timeoutId);// No output
// setInterval
// setInterval() function in TypeScript is a global function that executes a provided function
//  or code snippet repeatedly at a specified interval (in milliseconds). Here's a step-by-step
//   explanation with examples:
// Basic Syntax
// setInterval(callback, delay, [arg1, arg2, ...])
// Parameters
// - callback: Function to execute at each interval
// - delay: Time in milliseconds between each execution
// - arg1, arg2, ...: Optional arguments to pass to the callback function
// Example 1: Simple Interval
// setInterval(() => console.log("Hello, World!"), 2000);
// Output: "Hello, World!" (logged to the console every 2 seconds)
// const intervalId = setInterval(() => console.log("This will not be logged"), 2000);
// clearInterval(intervalId);
// function decrement (count:any) {
//     console.log(count);
//     if(count >
//         0) {
// setInterval( ()=> decrement(count -1),300);
//     }
// }
// // decrement(1000)
// // ><-----------------------------------><---------------------------------------><
// //FUNCTION
// In TypeScript, a function is a block of code that can be executed multiple times with different
//  inputs. Here's a step-by-step explanation with examples:
// Basic Syntax
// function functionName(parameters) { code to execute }
// Parameters
// - functionName: Name of the function
// - parameters: Optional inputs to the function
// - code to execute: Statements to execute when the function is called
//APPLICATION
//an application of a function refers to the act of calling/invoking a function with specific arguements .
//BREAKDOWN
// FUNCTION DECLARATION:you define a function with a name ,proerties and body that specifies what the 
//function does
//FUNCTION APPLICATION:you call the funtion by its name ,passing in the required
// arguements(values for the parameters)
// function main() {
//     try {
//     // Code that might throw an error
//     console.log("Success!");
//     } catch (error) {
//     console.error("Error:", error);
//     }
//     }
//     main();
//OBJECT ORIENTED
// function object(name:string,age:number)
// {return {name,age}};
// console.log(object("Ali",15));
//CHECKING VALID EMAIL
// function isEmail (email:string) {
//     return email.includes('@gmail.com')
// }
// console.log(isEmail("abc"))
//CURRYING
// Claro! Currying is a technique in functional programming that transforms a function with multiple arguments
//  into a sequence of functions, each taking a single argument. Here's a step-by-step explanation with examples
//   in TypeScript:
// Basic Syntax
// function curry(func: (args: any[]) => any): (arg: any) => any { ... }
// // Example 1: Simple Currying
// function add(a: number, b: number): number { return a + b; }
// const curriedAdd = (a: number) => (b: number) => add(a, b);
// const addFive = curriedAdd(5);
// console.log(addFive(7)); // Output: 8
//Example 2: Multiple Currying
// function greet (greeting:string,name:string):string{
//     return + greeting+ name;
// }
// const curriedgreet = (greeting:string) => (name:string) => greet(greeting,name);
// const sayHelo = curriedgreet('Hello');
// console.log(sayHelo('Ali')); //NaNAli
// function culate(taxRate:number,amount:number):number 
// {return amount * taxRate;}
// const calciun = (taxRate:number) => (amount:number) => culate(taxRate,amount);
// const oneThird = calciun(0.3);
// console.log(oneThird(99));
// console.log(oneThird(100));
// console.log(oneThird(7));
// CLOSURES
// In TypeScript, a closure is a function that has access to its own scope and the scope of its outer functions.
// EXAMPLES
// Example 1: Simple Closure
// function outerFunction() {
// const outerVariable = "I'm outer";
// function innerFunction() {
// console.log(outerVariable);
// }
// return innerFunction;
// }
// const inner = outerFunction();
// inner(); 
// function OF(name:string) {
//     return function innerFunction(age:number){
//         console.log('My name  is' +name +' I`m'+ age +'yers old');
//     }
// }
// const inner= OF('ALi')
// inner(30);
//PRACTICE TASKS
// closures in TypeScript:
// Task 1: Create a closure that returns a personalized greeting
// - Create a function createGreeting that takes a name parameter.
// - Return an inner function greet that logs a personalized greeting message to the console.
// - Call the greet function with a name to test it.
// Task 2: Implement a simple cache using a closure
// function creategreeting (name:string){
//     function greet() {
// console.log('Hello'+name);
//     }
//     return greet();
// }
// creategreeting('Ali')
// Task 2: Implement a simple cache using a closure
// function createCache() {
//     const file: { [key: string]: string } = {};
//     function get(key: string) {
//       return file[key];
//     }
//     function set(key: string, value: string) {
//       file[key] = value;
//     }
//     return { get, set };
//   }
//   const file = createCache();
//   file.set('key1', 'value1');
//   console.log(file.get('key1'));
// //SCOPE
// //In TypeScript, scope refers to the region of the code where a variable or function is defined 
// // //and can be accessed
// //       ><------------------------------><----------------------------><
// // Global Scope
// let c = "I'm global";
// console.log(c); // Output: I'm global
// // Function Scope
// function myFunction() {
// let b = "I'm local to myFunction";
// console.log(b); // Output: I'm local to myFunction
// }
// myFunction();
// // Block Scope
// if (true) {
// let a = "I'm local to this block";
// console.log(a); // Output: I'm local to this block
// }
// // console.log(blockVariable)
// Lexical Scope
// function x() {
// let x = "I'm outer";
// function y() {
// console.log(x); // Output: I'm outer
// }
// y();
// }
// x();
// Closure Scope
// function createCounter() {
// let count = 0;
// return function increment() {
// count++;
// console.log(count);
// };
// }
// const counter = createCounter();
// counter(); // Output: 1
// counter();//outou:2
//  ><------------------------------><--------------------------------><
// //RECURSION
// Recursion is a programming technique where a function calls itself repeatedly until it reaches 
// a base case that stops the recursion.
//syntax
// function recursiveFunction(parameters) {
//   // Base case
//   if (condition) {return result;}
//   // Recursive call
//   return recursiveFunction(newParameters);
// }}
//FACTORIAL
//   function factorial(n:number):number { if (n===0) {return 1;}
// return n*factorial(n -1);//Recursive call
// }
// console.log(factorial(200));
// console.log(factorial(160));
// console.log(factorial(199));
// // Example 2
// function a(n:number) :number {if(n<=1){//Base Case
//   return n;
// }
// return a(n-1) + a(n-2); //Recursive Call
// }
// console.log(a(10));
// console.log(a(6));
// console.log(a(30));
// console.log(a(17));
// // Example 4: Recursive Array Sum
// function sumArray(arr: number[]): number {
// if (arr.length === 0) { // Base case
// return 0;
// }
// return arr[0] + sumArray(arr.slice(1)); // Recursive call
// }
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// //different function
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers
// .map((num) => num * 2)
// .filter((num) => num > 4)
// .reduce((acc, num) => acc + num, 0);
// console.log(result); // Output: 18
// ><-----------------------------------------><------------------------------------><
// const cubic= [1,2,3,4,5,6];
// const cubicNmber = cubic.map( (a)=> a*a*a);
// console.log(cubicNmber);
// const Factorial = [1,2,3,4,5,6,7,8,9,0];
// const divbythree = Factorial.map( (b) => {if(b%3 ===0){
//   console.log(b);}
// })
// const isEven = [1,2,3,4,5,6,7,8,9,0];
// const divbytwo = isEven.map( (c) => {if(c%2 === 0)
//   console.log(c);
// })
// const fictor = [1,2,3,4,5,6,7,8,9,0];
// const niew = fictor.map( d => d*10);
// console.log(niew);
// Filter () (selects elements that meet a condition)
// const isEven = [1,2,3,4,5,6,7,8,9,0];
// const is = isEven.filter(n=> n%2 ===0 );
// console.log(is);
// const ififf = [1,2,3,4,5,6,7,8,9,0];
// const isOdd = ififf.filter( (v) => v%3===0);
// console.log(isOdd);
// // const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "mangoo"];
// const strings = ["Ali", "banana", "cherry", "date", "elderberry", "fig", "mangoo"];
// const consonantStrings = strings.filter(str => {
//   const firstLetter = str[0].toLowerCase();
//   return !["a", "e", "i", "o", "u"].includes(firstLetter);
// });
// console.log(consonantStrings);
// const isVowel= ['Ali','Zaid','Maryam','Abdullah','Abdul-Rahman'];
// const strings = isVowel.filter( str => {
//   const firstLetter = str[0].toLowerCase();
//   return ['a','e','i','o','u'].includes(firstLetter)
// })
// console.log(strings);
// 3. Reduce(): "Reduce to Single Value Easily" (combines elements into a single value)
// const func = ['Ali','zaid','Javeria'];
// const amm = func.reduce( (a,b,c,d) => a+b+c+d)
// console.log(amm);
// const mamd = [1,2,3,4,5,6,7,8,9]
// const times = mamd.reduce((a,b) => a*b );
// console.log(times);
// 4. ForEach(): "For Every Single Element, Handle" (executes a function for each element)
// const avi = ['Ali','Maryam','Zohaib','Shams'];
// const WelcomeGuest = avi.forEach( (n) => console.log('Dear ' + n  + ":\n\t What would you like to order?\n")); 
// ><-------------------------------------------------><-----------------------------------------------><
//2. Practice using these concepts in TypeScript:
//Solved above
// - Create higher-order functions(a function return function)
// function createAdder(x:number) {
//   return function(y:number) {
//     return x+y;
//   }
// };
// //clg(createAdder(5));    // Output: [Function (anonymous)]
// const add5 = createAdder(5);
// console.log(add5(10));
// function thive (x:number) {
//   return function(y:number) {
//     return x*y;
//   }
// }
// const thrice = thive(3);
// console.log(thrice(4));
// console.log(thrice(5));
// console.log(thrice(7));
// console.log(thrice(9));
// console.log(thrice(56));
// - Use closures and recursion to solve proble
//Problem 1: Write a function that calculates the sum of all numbers in a list.
//   let cache = {}; //, a cache is a technique used to store the results of expensive function calls so that 
//   //. Before calculating a result, the function checks if the input arguments are already in the cache. If they are, it returns the cached result instead of recalculating it.
// function createSum() {
//   let sum = 0;
//   function addNumber(num:number) {
//     sum += num;
//     return addNumber;
//   }
//   addNumber.toString = function() {
//     return sum;
//   };
//   return addNumber;
// }
// const sum = createSum(); 
// console.log(sum(1)(2)(3)(4));//Output : Function{anonymous}
// console.log(sum(1)(2)(3)(4));
// function GCD () {
//   function gcd(a:number , b:number) {
//     if(b ===0 ){return a}
// return gcd (b, a%b);
// }
// return gcd ;
// }
// const gcd = GCD();
// console.log(gcd(45,54));
// function logger (fn :(a:number , b:number) => number): (a:number , b:number) => number {
// return function(a:number ,b:number) :number {
//   console.log(`Calling function with arguement ${a} and ${b}`);
//   const result = fn(a,b);
//   console.log(`Result : ${result}`);
// return result;
// }}
// const add = (a:number , b:number):number => a+b;
// const loggedAdd = logger(add);//Outupt:Calling function with arguement 2 and 3
// //Result : 5
// loggedAdd(2,3);
// function multiplier (an: (c:number , d:number) => number): (c:number , d:number) => number {
//   return function(c:number , d:number) :number {
//     console.log(`calling function with arguements ${c} and ${d}`);
//     const result = an(c,d);
//     console.log(`Result : ${result}`);
//     return result; 
//   }}
//   const multiply = (c:number , d:number):number => c*d;
// const Multiple = multiplier(multiply);
// Multiple(8,6)
// function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
//   return arr.map(fn);
// }
// const numbers = [2,3,4,5];
// // const doubled = map(numbers, (x) => x * 2);
// // console.log(doubled); // [2, 4, 6]
// // function filter<T>(arr: T[], fn: (item: T) => boolean): T[] {
// //   return arr.filter(fn);
// // }
// // const numbers = [1, 2, 3, 4, 5];
// // const even = filter(numbers, (x) => x % 2 === 0);
// // console.log(even); // [2, 4]
// function reduce<T>(arr: T[], fn: (acc: T, item: T) => T, initial: T): T {
//   return arr.reduce(fn, initial);
// }
// const numbers = [1, 2, 3, 4, 5];
// const sum = reduce(numbers, (acc, x) => acc + x, 0);
// console.log(sum); // 15
// function compose<T, U, V>(fn1: (arg: T) => U, fn2: (arg: U) => V): (arg: T) => V {
//   return (arg) => fn2(fn1(arg));
// }
// const double = (x: number) => x * 2;
// const square = (x: number) => x * x;
// const doubleThenSquare = compose(double, square);
// console.log(doubleThenSquare(2)); // 16
// function retry<T>(fn: () => T, maxAttempts: number): T {
//   let attempts = 0;
//   while (attempts < maxAttempts) {
//     try {
//       return fn();
//     } catch (error) {
//       attempts++;
//       console.log(`Attempt ${attempts} failed. Retrying...`);
//     }
//   }
//   throw new Error(`All ${maxAttempts} attempts failed.`);
// }
// const flakyFunction = () => {
//   if (Math.random() < 0.5) {
//     throw new Error("Random failure!");
//   }
//   return "Success!";
// };
// const result = retry(flakyFunction, 3);
// console.log(result);
// function timer <T> (fn: ()=> T): ()=> T {
//   return function(): T{
//     const start = performance.now();
//     const result = fn();
//     const end = performance.now();
//     console.log(`Execution time ${end - start}ms`);
//     return result;
//   };
// }
// const timedFunction = timer( ()=> {
//   //Some long running options
// for (let i=0; i<10000000 ; i++) {}
// return "Done!";
// });
// timedFunction();//Output: Execution time 13.779200000000003ms
// Function composition 
// is a process of combining two or more functions to create a new function.
// The output of one function becomes the input for the next function. It's like
// building a pipeline of functions, where each function transforms the input in
// some way, and the final output is the result of all these transformations.
// Create a function formatName that takes a first name and last name as arguments
//  and returns a formatted string "Last Name, First Name".
// Use function composition to create formatName from two smaller functions: toUpperCase
//  and concat.
// function formatName (firstName:string , lastName:string) {
//   return `${firstName} ${lastName}` 
// }
// console.log(formatName("Ali","Zaid"));
// Write a function calculateTotal that takes an array of prices and a tax rate 
// as arguments and returns the total cost with tax.
// Use function composition to create calculateTotal from three smaller functions: 
// sum, multiply, and add.
// Point-free programming 
// is a programming paradigm where functions are composed together without explicitly 
// mentioning their inputs or outputs. Instead of focusing on the data being processed
// , point-free programming emphasizes the transformations and operations being applied 
// to the data.
// Point-free programming has several benefits, including:
// - Improved modularity and reusability of code
// - Easier composition of functions
// - Reduced boilerplate code
// - Increased readability and expressiveness
// In point-free programming:
// - Functions are treated as first-class citizens and are composed together to create
//  new functions.
// - The focus is on the functions themselves, rather than the data they operate on.
// - Functions are often defined in terms of other functions, rather than in terms of
//  their inputs and outputs.
// Some common techniques used in point-free programming include:
// - Function composition
// - Higher-order functions
// - Currying
// - Partial application
// const double = (x: number) => x * 2;//double(23);
// const addone = (y:number) => y+1;//console.log(addone(23));
// const doubleThenadd1 = (a:number) =>(2*a)+1; // console.log(doubleThenadd1(12));
// // const multiply = (x:number) => (y:number)=> x*y
// const compose = (f: (x:number) =>number , g:(x:number) => number ) => (x:number) => f(g(x));
//  const add = (x:number) => (y:number) => x+y; // console.log(add(2));
// // const doubleThenAddOne = compose(addone(3), double(5));
// // console.log(doubleThenAddOne(2));
// const doubleThenAddOne = compose(add(1), multiply(5));
// console.log(doubleThenAddOne(1));
// const double = (x: number) => x * 2;
// const addOne = (x: number) => x + 1;
// const doubleThenAddOne = compose(double, addOne);
// console.log(doubleThenAddOne(1));//Outut:4
// const add = (x: number) => (y: number) => x + y;
// const double = (x: number) => x * 2;
// const addTwoThenDouble = compose(double, add(2));
// console.log(addTwoThenDouble(2));
// const compose = (f : (x:number) => number, g: (x:number) =>number) => (x:number) => f(g(x));
// const addTaxes = (x:number) => x+3;
// const applyDiscount = (y:number) => y-(y*0.25);
// const CalculateSubtotal = compose(addTaxes,applyDiscount);
// console.log(CalculateSubtotal(5));//Unsuitable on expectation
// const compose = (f: (x:number) => number , g: (x:number) => number) => (x:number) => f(g(x));
// const double = (x:number) => x*2;
// const addone = (x:number) => x+1;
// const doubleThenadd1 = compose(double,addone); 
// console.log(doubleThenadd1(7));// 2(x+1)
//point-free programming is not finished yet
//- Pipe function: A higher-order function that composes multiple functions in a pipeline.
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
//- Point-free error handling: Use functions like tryCatch or either to handle errors in a point-free way.
const safeDivide = (x) => (y) => (() => x / y);
//
const doubleNumbers = (numbers) => doubleNumbers.map((x) => x * 2, numbers);
//- Point-free data transformations: Use functions like map or chain to transform data in a point-free way.
