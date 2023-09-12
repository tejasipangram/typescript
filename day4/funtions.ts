// Functions
// the `: number` here specifies that this function returns a number
function getValue(): number {
  return 3232;
}

// Void Return Type
// this is used when the function does not return anything

// function connectDb(req: Object, res: any): void {
//   try {
//     let connected: unknown;
//     if (connected.readyState === 1) {
//       console.log("database is already connectd");
//     } else {
//       connected = await mongoose.connect("string");
//     }
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ success: false, message: "Something went wrong" });
//   }
// }

//parameters

function multiply(a: number, b: number) {
  return a * b;
}

//optionsal parameters

function getValues(a: number, b: number, c?: number) {
  return a * b + (c || 0);
}

//default parameters
//optionsal parameters

function getValues1(a: number, b: number, c: number = 432) {
  return a * b + c;
}

//rest parameters

function getData(a: number, b: number, ...res: number[]) {
  return res.map((item) => item * 10);
}

//type alias

type Negate = (value: number) => number;

const getNegate: Negate = (value) => value - 1;
