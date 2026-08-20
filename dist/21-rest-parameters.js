"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function total(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}
console.log(total(5, 5, 2, 4, 5));
//# sourceMappingURL=21-rest-parameters.js.map