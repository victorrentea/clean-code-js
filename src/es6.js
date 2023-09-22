let strings = ["a", "b", "c"];
for (let string of strings) {
// for (let string in strings) { // difference ?
    console.log("Element: " + string);
}


// TODO Build a Map of {x,y} points to colors "white", "red", "blue"; Enjoy .set, .has, .keys, .values, .entries, .forEach((k,v) .delete .size
// const map = {{1,2}:"red"}

function validate() {
    console.log("unused");
}
Array.prototype.iCanDoThis = function () {
    return "polluting global namespace: addind more functions to [], and [] are everywhere";
}
console.log(strings.iCanDoThis());
eval("valid" +"ate()" );

function Obj() {
    this.x = 1;
    // const y  = 1;

    setTimeout(function () {
        console.log("timeout(function : " + this.x);
    }, 100);

    setTimeout(() => {
        console.log("timeout(()=> : " + this.x);
    }, 100);

    return {
        f: function () { // "function" creates its own "this" scope, different than the host func
            return this.x;
        },
        arrow: () => { // reuses this in the context it;s defined
            return this.x;
        }
    };
}

let old = new Obj();
console.log("function: " + old.f());
console.log("Arrow: " + old.arrow());
console.log("x is 'private':" + old.x);
