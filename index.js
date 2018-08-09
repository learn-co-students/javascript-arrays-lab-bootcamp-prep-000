// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return window.kittens(["Ralph", kittens...])
}
function destructivelyPrependKitten(name) {
  return window.kittens([kittens..., "Bob"])
}