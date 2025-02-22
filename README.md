Functional Programming in TypeScript
This repository demonstrates the principles of functional programming in TypeScript, focusing on concepts like immutable data,
 pure functions, higher-order functions, closures, recursion, and function composition. The examples provided showcase how to
 write clean, predictable, and reusable code using functional programming techniques.

Key Concepts:-

Immutable Data
Pure Functions
Higher-Order Functions
Function Composition
Closures
Recursion
Examples
Map, Filter, Reduce
Currying
Point-Free Programming

Key Concepts
Immutable Data
Immutable data refers to data that cannot be changed after it is created. In TypeScript, immutability can be achieved using:

const for variable declarations.
readonly for properties.

Object.freeze() to prevent modifications to objects.

Example:
typescript
 
const PI: readonly number = 3.14; // Immutable value

Pure Functions
Pure functions are functions that:
Always return the same output for the same input.
Have no side effects (e.g., no mutations or external state changes).

Example:
typescript
 
function add(a: number, b: number): number {
  return a + b; // Pure function
}


Higher-Order Functions
Higher-order functions (HOFs) are functions that:
Take other functions as arguments.
Return a function as their result.

Example:
typescript
 
function logger(callback: (message: string) => void): void {
  callback("Hello, World!");
}

logger(console.log); // Output: Hello, World!

Function Composition
Function composition is the process of combining two or more functions to create a new function. The output of
 one function becomes the input of the next.

Example:
typescript
 
const compose = (f: (x: number) => number, g: (x: number) => number) => (x: number) => f(g(x));

const double = (x: number) => x * 2;
const addOne = (x: number) => x + 1;

const doubleThenAddOne = compose(double, addOne);
console.log(doubleThenAddOne(5)); // Output: 11


Closures
A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.


Example:
typescript
 
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2


Recursion
Recursion is a technique where a function calls itself to solve a problem. It is often used for tasks like traversing trees or
calculating factorials.

Example:
typescript
 
function factorial(n: number): number {
  if (n === 0) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120

Examples
Map, Filter, Reduce
These are common higher-order functions used for transforming, filtering, and aggregating data.

Map
typescript
 
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((x) => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]


Filter
typescript
 
const evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
Reduce
typescript
 
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // Output: 15
Currying
Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

Example:

typescript

const add = (a: number) => (b: number) => a + b;
const addFive = add(5);
console.log(addFive(10)); // Output: 15
Point-Free Programming
Point-free programming emphasizes composing functions without explicitly mentioning their arguments.

Example:
typescript
 
const pipe = (...fns: ((x: number) => number)[]) => (x: number) => fns.reduce((acc, fn) => fn(acc), x);

const double = (x: number) => x * 2;
const addOne = (x: number) => x + 1;

const doubleThenAddOne = pipe(double, addOne);
console.log(doubleThenAddOne(5)); // Output: 11

Summary 
What I used and Why I use?

1. Immutable Data
What it is: Data that cannot be changed after it is created.

What it does: Ensures predictability and prevents unintended side effects by making data unmodifiable.

Example: Using const or readonly to declare variables or properties.

2. Pure Functions
What it is: Functions that always return the same output for the same input and have no side effects.

What it does: Makes code predictable, easier to test, and reusable.

Example: A function that adds two numbers without modifying any external state.

3. Higher-Order Functions (HOFs)
What it is: Functions that take other functions as arguments or return functions as results.

What it does: Enables abstraction and reusable logic by treating functions as first-class citizens.

Example: map, filter, and reduce are common HOFs.

4. Function Composition
What it is: Combining two or more functions to create a new function.

What it does: Simplifies complex logic by breaking it into smaller, reusable functions.

Example: Combining a double function and an addOne function to create a doubleThenAddOne function.

5. Closures
What it is: A function that retains access to its lexical scope, even when executed outside that scope.

What it does: Allows functions to "remember" their environment, enabling powerful patterns like encapsulation and data privacy.

Example: A counter function that increments a value each time it is called.

6. Recursion
What it is: A technique where a function calls itself to solve a problem.

What it does: Simplifies problems that can be broken down into smaller, repetitive tasks (e.g., traversing trees or calculating factorials).

Example: A function to calculate the factorial of a number by calling itself with a smaller input.

7. Currying
What it is: Transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

What it does: Makes functions more flexible and reusable by allowing partial application.

Example: A curried add function that can be partially applied to create an addFive function.

8. Point-Free Programming
What it is: Writing functions without explicitly mentioning their arguments.

What it does: Emphasizes the flow of data and transformations, making code more declarative and readable.

Example: Composing functions like double and addOne without explicitly passing arguments.

9. Map, Filter, Reduce
What they are: Higher-order functions for transforming, filtering, and aggregating data.

What they do:

Map: Applies a function to each element in a collection.

Filter: Selects elements that meet a condition.

Reduce: Combines elements into a single value.

Example: Using map to double numbers, filter to select even numbers, and reduce to calculate their sum.

10. Immutability Libraries
What they are: Libraries like Immutable.js that provide immutable data structures.

What they do: Simplify working with immutable data by providing built-in methods for creating and manipulating immutable collections.

Example: Using Immutable.List to create an immutable list.

11. Error Handling in Functional Programming
What it is: Techniques like tryCatch or either to handle errors in a functional way.

What it does: Ensures predictable error handling without breaking the flow of functional code.

Example: Using tryCatch to safely divide two numbers.

12. Lazy Evaluation
What it is: Delaying the evaluation of an expression until its value is needed.

What it does: Improves performance by avoiding unnecessary computations.

Example: Using generators or lazy data structures to process large datasets.
