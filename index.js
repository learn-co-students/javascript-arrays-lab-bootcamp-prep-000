var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  console.log(kittens)
}
destructivelyAppendKitten('Ralph')

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  console.log(kittens);
}
destructivelyPrependKitten("Bob")

function destructivelyRemoveLastKitten() {
  kittens.pop();
  console.log(kittens);
}
destructivelyRemoveLastKitten()

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  console.log(kittens);
}
destructivelyRemoveLastKitten()

function appendKitten(name) {
  return [...kittens, name];
}
console.log(appendKitten("Broom"))

function prependKitten(name) {
  return [name, ...kittens];
}
console.log(prependKitten("Arnold"))

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
console.log(removeLastKitten())

function removeFirstKitten() {
  return kittens.slice(1);
}
console.log(removeFirstKitten())
