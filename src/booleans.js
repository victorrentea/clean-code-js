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

// Warning⚠️: this method might be called from multiple places in the codebase ...
function bigUglyMethod(storeId, task) {
    console.log("Cow Logic 1 " + task + " and " + storeId);
    console.log(task);
    console.log("Cow Logic 3 " + task);

    // console.log("Logic just for CR#323 : " + task);

    console.log("Donkey Logic 1 " + storeId);
    console.log("Donkey Logic 2 " + storeId);
    console.log("Donkey Logic 3 " + storeId);
}


function useCase323(id, task) {
    // TODO The shared called method must execute logic specific for my use-case #323
    bigUglyMethod(id, task);
}