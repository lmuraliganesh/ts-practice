
//Arrow function
const greetArrow = (name: string): string => {
  return `Hello, ${name}!`;
};
console.log(greetArrow("Alex"));

//short function
const greetShort = (name: string):string => `Hello, ${name}`;
console.log(greetShort("Alex"));

//default parameter
function greetdefault(name: string, greeting: string = "Hey"): string {
    return `${name}!,${greeting}`;
}

console.log(greetdefault("Alex"));
console.log(greetdefault("Ganesh", "Allthebest"));
 
type TaskStatus = "Todo" | "In-progress" | "Done"

let currentStatus: TaskStatus = "Todo"
console.log(currentStatus);

let status2: TaskStatus = "In-progress"
console.log(status2);

currentStatus = "Done";
console.log(currentStatus);

//currentStatus = "Cancelled";
