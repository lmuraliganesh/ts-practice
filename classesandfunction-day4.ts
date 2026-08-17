class mytask  {
    id : number;
    title :string;
    private done : boolean = false;

constructor(id: number, title:string){
    this.id = id;
    this.title = title;
    this.done = false;
  }

  markDone(){
    this.done = true;
  }

  isdone(): boolean {
    return this.done;
  }
}
const task1 = new mytask(1, "Learn classes");
console.log(task1.isdone());
task1.markDone();
console.log(task1.isdone());

function firstItem<T>(items: T[]): T {
  if (items.length === 0) {
    throw new Error("Array is empty");
  }
  const [first] = items;
  return first!;
}
const firstNumber = firstItem([10, 20, 30]);
const firstWord = firstItem(["apple", "banana", "cherry"]);

console.log(firstNumber);
console.log(firstWord);

interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "Alex" },
  status: 200,
  success: true,
};

console.log(userResponse);