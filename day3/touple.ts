// Touple
// it is typed array

//it is used to defined the each index of an array

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// so we can define the each type of the element in the array

// when you push the value in the touple it will actaully not defining the type so it is good practice to make it readonly

ourTuple.push("this is string ");
// the last index will not have specified type

// so define it by readonly
const graph: [x: number, y: number] = [55.2, 41.3];

const [x] = graph;

console.log(x); // 55.2
