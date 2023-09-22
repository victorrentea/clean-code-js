
function createMicrobrewery(brewery = "Hipster Brew Co.") {
    // name = name || "Hipster Brew Co.";
    // const breweryName = name || "Hipster Brew Co."; // rewrite in ES6
    // ...
    console.log(breweryName);
}



// disableElements("el1","el2")
// disableElements("el1","el2","el3")
// function disableElements(...ids) {}

// createMenu("title", "bod", "bt", true);
createMenu({
    body:"bod",
    title:"title",
    buttonText: "bt",
    cancellable:true});
// function createMenu(title, ...rest) { // over 3 params ..
function createMenu({title, body, buttonText, cancellable}) { // over 3 params ..
// function createMenu({title, body, buttonText, cancellable}) { // over 3 params ..
    // ...
    if (cancellable) {
        // console.log(`<button>${rest[1]}</button>`);
        console.log(`<button>${buttonText}</button>`);
    }
}
createMenu("title", "body", "but", true)
// TODO #2 how to set default values to some of them? First idea: config.cancellable = config.cancelable || true;

// @see value-objects.js


function addToDate(date, month) {
    // ...
}
const date = new Date();
addToDate(date, 1); // It's hard to tell from the function name what is added



function calculateOrderPrice(orderString, priceList) {
    // split orderString by spaces using Regexp
    const orderData = orderString.split(/\s+/); // parsing
    let productPrice = priceList[orderData[0].split(/-/)[1]]; // parsing + resolve price
    return parseInt(orderData[1]) * productPrice; // biz logic
}
console.log(calculateOrderPrice("Chair-CHR 4", {"CHR": 5}));




// BAD
Array.prototype.diff = function diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
};
console.log([1,2,3].diff([1,2,4])); // [3]
// GOOD:
class SuperArray extends Array {
    diff(comparisonArray) {
        const hash = new Set(comparisonArray);
        return this.filter(elem => !hash.has(elem));
    }
}
console.log(new SuperArray(1,2,3).diff([1,2,4])); // [3]