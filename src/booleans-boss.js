function bossLevel(fluff, tasks, cr323) {
    let index = 0;
    let taskCount = tasks.length;
    console.log("Logic1");
    let taskIds = [];
    if (fluff) {
        console.log("Logic3");
        for (let task of tasks) {
            console.log("Starting " + task);
            task.started = true;

            taskIds.push(task.id);

            if (cr323) { // TODO task = remove the boolean
                console.log("My Logic: " + task);
            }

            index++;
            console.log("Audit task #" + index + ": " + task);
        }
        console.log("Logic6 " + taskCount);
        console.log("Task Ids: " + taskIds);
    } else {
        console.log("Logic7 on fluff=false " + tasks);
    }
    console.log("Logic8");
}

class Task {
    constructor(id, started) {
        this.id = id;
        this.started = started;
    }
    toString = () => `Task(id=${this.id}, started=${this.started})`;
}

console.log("== 1 ==")
bossLevel(true, [new Task(5)], false);
console.log("== 2 ==")
bossLevel(true, [new Task(5)], false);
console.log("== 3 ==")
bossLevel(true, [new Task(5)], true);
console.log("== 4 ==")
bossLevel(true, [], false);
console.log("== 5 ==")
bossLevel(false, [new Task(5)], false);
console.log("== 6 ==")
bossLevel(true, [new Task(5),new Task(6)], false);