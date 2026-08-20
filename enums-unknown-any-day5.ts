enum Taskstatus {
    Todo,
    InProgress,
    Done,
}

//let status : Taskstatus = Taskstatus.Todo;
//console.log(status);
console.log(Taskstatus[2]);
console.log(`Todo=${Taskstatus.Todo}`);
console.log(Taskstatus[1]);

let valueAny: any = "hello";
valueAny = 42;
console.log(valueAny);

let mystery : unknown = "Hello";

    if (typeof mystery === "string")
    {
        console.log(mystery);
    }
    else{
        console.log("Not a String")
    }
function describe (value : string|number){
    if (typeof value === "string")
    {
        console.log(value);
    }
    else {
        console.log(value.toFixed())
    }
}
describe("Ganesh");
describe(9.9900);