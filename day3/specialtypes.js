"use strict";
// the special types are those types which does not refer to any specific type
// 1. Any
let u = true;
u = "string";
console.log(Math.round(u));
// will show NaN means not a number which might be confusing so in typescript we need to define the type of the variable
