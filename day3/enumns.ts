//its is kind of class but the group of constant

// there are two enums

// 1. numeric enumn

// if you initialize the value of first element in the class it will increament else you have defined the all values then it will shows the independent values that you have defined

enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'

enum CardinalDirections1 {
  North = 32142,
  East,
  South,
  West,
}
let currentDirection1 = CardinalDirections1.North;
//logs 32142
console.log(currentDirection1);
console.log(CardinalDirections1.South); //logs 32144 means it adds by one

//2. String Enums

enum CardinalDirections2 {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
// logs "North"
console.log(CardinalDirections2.North);
// logs "West"
console.log(CardinalDirections2.West);

// if you have initilized the value in the string enum then will thrown an errr for sure
