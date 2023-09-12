// Union are used to specify more than one type for the variable or parameter
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");

//below code is also valid
let firstName1: string | number = "tejas";
firstName1 = 432;

function printStatusCode1(code: string | number) {
  if (typeof code === "string") {
    console.log(`My status code is ${code.toUpperCase()}.`); // error: Property 'toUpperCase' does not exist ontype 'string | number'.
  }
}

printStatusCode("23232");

//if you directly use the toUpperCase method then it will thrwon an error you need to check the type of the parameter before using the inbuild methods
