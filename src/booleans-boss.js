function bossStart(tasks) {
    console.log("Logic1");
    let taskIds = tasks.map(task => task.id); // FP ftw ❤️
    //let total = tasks.map(task => task.id).reduce((a, b) => a + b, 0); // FP!!
    // total+=task.id; // state change, not FP
    // BUT aren't we hitting performance here? because we are iterating the array twice?
    // from highschool/faculty we know that smart engineers are writing efficient code O(n) and not O(n^2)
    // in practice: how many elements are in the list
    // - millions? then we have a problem: where did they come from ? compared to NETWORK, for is nothing
    // - thousands? you won't see a problem
    // SO MEASURE if in doubt

    // when you break a for {} into multiple loops, be careful about the ORDER OF OPERATIONS
    return taskIds;
}

function bossEnd(cr323, tasks, taskIds) {
    // taskIds.push(task.id); // stat change, not FP

    if (cr323) { // TODO task = remove the boolean
        for (let task of tasks) {
            console.log("My Logic: " + task);
        }
    }
    let index = 0;
    for (let task of tasks) {
        index++;
        console.log("Audit task #" + index + ": " + task);
    }
    console.log("Logic6 " + tasks.length);
    console.log("Task Ids: " + taskIds);
    console.log("Logic8");
}

function betterName(tasks) {
    for (let task of tasks) {
        console.log("Starting " + task);
        task.started = true;
    }
}

function bossLevel(tasks, cr323) {
    console.log("Logic3");
    betterName(tasks);
    bossEnd(cr323, tasks, bossStart(tasks));
}

function bossLevelNoFluff(tasks) {
    console.log("Logic1");
    console.log("Logic7 on fluff=false " + tasks);
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
bossLevel([new Task(5)], false);
console.log("== 2 ==")
bossLevel([new Task(5)], false);
console.log("== 3 ==")
bossLevel([new Task(5)], true);
console.log("== 4 ==")
bossLevel([], false);
console.log("== 5 ==")
bossLevelNoFluff([new Task(5)]);
console.log("== 6 ==")
bossLevel([new Task(5), new Task(6)], false);