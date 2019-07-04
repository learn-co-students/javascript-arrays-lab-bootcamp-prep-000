var kittens = [] //define your array here
var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here


function destructivelyAppendKitten(name) {
  kittens.push(name);
}
destructivelyAppendKitten('Ralph')
console.log(kittens)

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
destructivelyPrependKitten('Bob')
console.log(kittens)

function destructivelyRemoveLastKitten() {
  kittens.pop();
}
destructivelyRemoveLastKitten()
console.log(kittens)

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
destructivelyRemoveFirstKitten()
console.log(kittens)

function appendKitten(name) {
  return [...kittens, name];
}
console.log(appendKitten("Broom"))

function prependKitten(name) {
  return [name, ...kittens];
}
console.log(prependKitten("Garfield"))

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
console.log(removeLastKitten())

function removeFirstKitten() {
  return kittens.slice(1);
}
console.log(removeFirstKitten())

/*
// Check out this program:
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
