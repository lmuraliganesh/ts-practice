type Taskstatus = "todo" | "Inprogress" |"Done";

interface Task {
    id : number;
    title : string;
    status : Taskstatus;
}

class Taskmanager {
    private tasks: Task[] = [];

    removeTask(id: number): void {
  this.tasks = this.tasks.filter(t => t.id !== id);
}

    addtask(title: string): void{
        const newTask: Task = {
            id: this.tasks.length + 1,
            title :title,
            status : "todo"
        };
        this.tasks.push(newTask)
    }
    markDone(id: number): void {
  const task = this.tasks.find(t => t.id === id);
  if (task) {
    task.status = "Done";
  } else {
    console.log(`Task with id ${id} not found`);
  }
}
    listTasks(): void {
        console.log(this.tasks);
    }
}

const manager = new Taskmanager();
manager.addtask("learn pythhom");
manager.addtask("build Todo App");
manager.listTasks();
manager.markDone(1);
manager.listTasks();
manager.removeTask(2);
manager.listTasks();

