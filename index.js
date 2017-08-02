const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
   kittens.push(name);
   return kittens;
 }

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittens = [name,...kittens]
  return newKittens
}

function removeLastKitten(name){
  var newKittens = kittens.slice (0, kittens.length - 1)
  return newKittens
}

function removeFirstKitten(name){
  var newKittens = kittens.slice(1)
  return newKittens
}
