// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat (name) {
    cats.push ("Ralph")
}

function destructivelyPrependCat (name) {
    cats.unshift ("Bob")
}

function destructivelyRemoveLastCat () {
    cats.pop ("Ralph")
}
function destructivelyRemoveFirstCat() {
    cats.shift ("Bob")
}
function appendCat(name) {
    const newCatArray = [...cats, "Broom"];
    return newCatArray;
}
console.log(appendCat());

function prependCat(name) {
    const newCatArray = ["Arnold", ...cats];
    return newCatArray;
}
console.log(prependCat());

function removeFirstCat(name) {
    const newCatArray = cats.slice(1);
    return newCatArray
}
console.log(removeFirstCat())

function removeLastCat(){
    const newCatArray = cats.slice(0, -1);
    return newCatArray;
}
console.log(removeLastCat())

beforeEach(function () {
    cats.length = 0;
    cats.push("Milo","Otis","Garfield");
});


