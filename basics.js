"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//basic types
let name = "Alex";
let age = 32;
let address = "No-94,Lancor lumina apartment, nellikuppamroad, chennai";
let isLearning = true;
//array
let scores = [90, 85, 77];
let point = [10, 20];
//functions with type params/return
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet(name));
console.log(age);
console.log(address);
console.log(scores[0]);
scores.push(10);
console.log(scores);
const MyAddress = { flatnumber: 22, streetname: "abdulstreet", city: "Chennai", pincode: 600032 };
console.log(MyAddress);
const myTask = { id: 1, title: "Learn TypeScript", done: false };
console.log(myTask);
//# sourceMappingURL=basics.js.map