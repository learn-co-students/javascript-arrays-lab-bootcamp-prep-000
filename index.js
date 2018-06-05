const app = "I don't do much."
window.kittens = ['Milo', 'Otis', 'Garfield'];

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}
kittens();

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
destructivelyAppendKitten('Ralph');

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
destructivelyPrependKitten('Bob')

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
destructivelyRemoveLastKitten()

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
destructivelyRemoveFirstKitten()

function appendKitten(name) {
  return [...kittens,name]
}
appendKitten('Broom')

function prependKitten(name) {
  return [name,...kittens]
}
prependKitten('Arnold')

function removeLastKitten() {
  return kittens.slice(-3,-1);
}
removeLastKitten()

function removeFirstKitten() {
  return kittens.slice(1,3)
}
removeFirstKitten()
