//Typscript casting

//this is used when we need to override the type of the variable

const city: unknown = "mumbai";

console.log((city as string).length);

// Casting with <>
const x1: unknown = "hello";

console.log((<string>x1).length);

// Force casting

// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

const x2 = "hello";
console.log(x2 as unknown as number);

//but make sure that you are only telling compiler to trust developer
//this does not mean that the type will be changed at the run time method.
