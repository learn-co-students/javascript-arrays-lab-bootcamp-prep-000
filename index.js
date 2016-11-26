const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}
