// Arrays

//we can define the type of the array as below
// means the values in the array will be type of string only

let names: string[] = [];
names.push("Dylan"); // no error

names = ["432", "this is tring "];
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// readonly keyword defends the array from being changed

const names1: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

// type inference
// typescript can detect the type of the array internally
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
