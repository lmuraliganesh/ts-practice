
//basic types
let name: string = "Alex";
let age: number = 32;
let address: string = "No-94,Lancor lumina apartment, nellikuppamroad, chennai"
let isLearning: boolean = true;

//array
let scores: number[] = [90, 85, 77];
let point: [number, number] = [10, 20];

//functions with type params/return
function greet(name: string): string{
    return `Hello, ${name}!`;
}

console.log(greet(name));
console.log(age);
console.log(address);
console.log(scores[0]);
scores.push(10);
console.log(scores);


// 4. Optional params

//function greetUser(name: string, greeting?: string): string{
//    return `${greeting ?? "Hello"}, ${name}!`;
//}

// 5. A simple object type

interface Task {
    id: number;
    title: string;
    done: boolean;
}

interface Address{
    flatnumber: number;
    streetname: string;
    city: string;
    pincode: number;
}

const MyAddress: Address= {flatnumber:22,streetname:"abdulstreet", city:"Chennai", pincode:600032}
console.log(MyAddress);

//const myTask: Task ={id :1, title: "Learn TypeScript", done: false};
//console.log(myTask);

