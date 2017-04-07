const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
kittens.push(name);

}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
 kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}

function appendKitten(name) {
var newKittens = [...kittens]
 newKittens.push(name)
return newKittens
}

function prependKitten(name){
var newKittens = [...kittens]
newKittens.unshift(name)
return newKittens
}

function removeLastKitten() {
  var newKitten = [...kittens]
  newKitten.pop()
  return newKitten
}

function removeFirstKitten() {
  var newKitten = [...kittens]
  newKitten.shift()
  return newKitten
}
