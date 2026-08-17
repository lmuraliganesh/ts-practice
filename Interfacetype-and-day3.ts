interface Task {
    Id : number | string;
    Title : string;
    done : boolean;

}
interface Task {
    priority: string;
}
interface Task {
    condition : string;

}
const myTask: Task = {
    Id : 1,
    Title : "Learn typescript",
    done : true,
    priority : "Normal",
    condition : "Matched",
   
    }

console.log(myTask);

type typeTask = {
    id : number;
    title : string;
    done : boolean;
};

const mytask2 : typeTask ={
    id : 3,
    title : "learn javascript",
    done : false,
}

console.log(mytask2);

// --- type can do things interface can't ---
type ID = number | string;
type Point = [number, number];

const userId: ID = 101;
const userId2: ID = "abc101";
const coordinate: Point = [10, 20];

console.log(userId);
console.log(userId2);
console.log(coordinate);