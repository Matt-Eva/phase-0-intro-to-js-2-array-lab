// Write your solution here!
const cats = [`Milo`,`Otis`,`Garfield`];

function destructivelyAppendCat(name){
    cats.push(`${name}`);
}
function destructivelyPrependCat(name) {
cats.unshift(`${name}`);
}
function destructivelyRemoveLastCat(){
cats.pop();
}

function destructivelyRemoveFirstCat(){
cats.shift();
}

function appendCat(name) {
    let oneMoreCatLast = [...cats, `${name}`];
    return oneMoreCatLast;
}

function prependCat(name) {
    let oneMoreCatFirst = [`${name}`, ...cats];
    return oneMoreCatFirst;
}

function removeLastCat() {
    let oneLessCatLast = [...cats.slice(0, cats.length - 1)];
    return oneLessCatLast;
}

function removeFirstCat() {
    let oneLessCatFirst = [...cats.slice(1)];
    return oneLessCatFirst;
}

console.log(removeLastCat());

console.log(removeFirstCat());

