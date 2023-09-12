// the special types are those types which does not refer to any specific type

// 1. Any
{
  let u = true;
  //   u = "string";
  //   console.log(Math.round(u));
}

// this block will throw an errror becuase the infer value the u is boolean in boolean type we are trying to assgin the string value and the end checking round value of the boolean which is not a number

{
  let u: any = true;
  u = "string";
  console.log(Math.round(u));
  // now this will not throw any error because we have specified the value as any means the type of the u might be any
  //   in simple tersm any type disables type checking
  //   we should avoid any type
}

// 2.unknown
// this is special type which is quite safer than any here we do not know the exact type of the varialbe so we have declared it as the unkown keyword

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

// 3. never
// it will thorwn an error when you defiend the type (if you define the variable with never and assigned the value it will throw an error )
// it is rarely used

// 4. undefined and null

// in javascript you might have used the null and undefined at initialation
// so if you want to assign the value as null you can use null
let y: undefined = undefined;
let z: null = null;
// in this case the values of y and z will be undefined and null only respectively
