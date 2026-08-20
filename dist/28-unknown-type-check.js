"use strict";
// let value: unknown = "Aminul";
Object.defineProperty(exports, "__esModule", { value: true });
// if (typeof value === "string") {
//   console.log("string")
// }
// else {
//   console.log("number")
// }
function checkType(value) {
    if (typeof value === "string") {
        console.log("string");
    }
    else {
        console.log("number");
    }
}
checkType("Aminul");
checkType(21);
//# sourceMappingURL=28-unknown-type-check.js.map