var kittens = [] //define your array here
var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}

/*
var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name) // ["Milo", "Otis", "Garfield", "Ralph"]
  console.log(kittens)
}
destructivelyAppendKitten('Ralph') // ["Milo", "Otis", "Garfield", "Ralph"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name); // [ 'Bob', 'Milo', 'Otis', 'Garfield', 'Ralph' ]
  kittens.pop(name); // [ 'Bob', 'Milo', 'Otis', 'Garfield' ]
  console.log(kittens);
}
destructivelyPrependKitten("Bob") // ["Bob", "Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop(); // [ 'Bob', 'Milo', 'Otis' ]
  kittens.shift(); // ['Milo', 'Otis', 'Garfield']
  console.log(kittens);
}
destructivelyRemoveLastKitten() // ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  kittens.push("Garfield");
  console.log(kittens);
}
destructivelyRemoveFirstKitten() // ["Otis", "Garfield"]

function appendKitten(name) {
  kittens.unshift("Milo")
  console.log([...kittens, name]);
}
appendKitten("Broom") // ["Milo", "Otis", "Garfield", "Broom"]

function prependKitten(name) {
  console.log([name, ...kittens]);
}
prependKitten("Arnold") // ["Arnold", "Milo", "Otis", "Garfield"]

function removeLastKitten() {
  console.log(kittens.slice(0, kittens.length - 1));
}
removeLastKitten() // ["Milo", "Otis"]

function removeFirstKitten() {
  console.log(kittens.slice(1));
}
removeFirstKitten() // ["Otis", "Garfield"]
*/
