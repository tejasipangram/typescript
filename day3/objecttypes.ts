// object types
// now lets talk about the objects
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

// const car1  : {type:string, milage:number}= {
//   type:"sports"
// };
// //will throw an error as you not defined the milage

// car.milage = 323232;
// console.log(car)
const car1: { type: string; milage?: number } = {
  type: "sports",
};

car1.milage = 433223;
console.log(car);

// index signatures
// what if you do not need to define the key names in the types

const nameAgeMap: { [index: string]: number } = {};

//this is solutions for this

nameAgeMap.mark = 42323;
// nameAgeMap.lark = "tstring "; //this will show an error
