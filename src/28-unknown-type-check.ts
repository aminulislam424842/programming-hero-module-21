// let value: unknown = "Aminul";

// if (typeof value === "string") {
//   console.log("string")
// }
// else {
//   console.log("number")
// }


function checkType (value:unknown):void {
  if (typeof value === "string") {
    console.log("string")
  }
  else {
    console.log("number")
  }
}

checkType("Aminul");
checkType(21);