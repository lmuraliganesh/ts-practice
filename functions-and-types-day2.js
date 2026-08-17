"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Arrow function
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};
console.log(greetArrow("Alex"));
//short function
const greetShort = (name) => `Hello, ${name}`;
console.log(greetShort("Alex"));
//default parameter
function greetdefault(name, greeting = "Hey") {
    return `${name}!,${greeting}`;
}
console.log(greetdefault("Alex"));
console.log(greetdefault("Ganesh", "Allthebest"));
let currentStatus = "Todo";
console.log(currentStatus);
let status2 = "In-progress";
console.log(status2);
currentStatus = "Done";
console.log(currentStatus);
//currentStatus = "Cancelled";
//# sourceMappingURL=functions-and-types-day2.js.map