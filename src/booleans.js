// in other places:
function blueMethod(id, task) {
    bigUglyMethod(id, task);
}

function greenMethod(id, task) {
    bigUglyMethod(id, task);
}

function yellowMethod(id, task) {
    bigUglyMethod(id, task);
}

function redMethod(id, task) {
    bigUglyMethod(id, task);
}

function bigUglyMethod(storeId, task, cr323 = false) {
    console.log("Cow Logic 1 " + task + " and " + storeId);
    console.log(task);
    console.log("Cow Logic 3 " + task);

    if (cr323) {
        console.log("Logic ONLY FOR MY use-case CR#323 : " + task);
    }

    console.log("Donkey Logic 1 " + storeId);
    console.log("Donkey Logic 2 " + storeId);
    console.log("Donkey Logic 3 " + storeId);
}


function useCase323(id, task) {
    // TODO The shared called method must execute logic specific for my use-case #323
    bigUglyMethod(id, task, true);
}