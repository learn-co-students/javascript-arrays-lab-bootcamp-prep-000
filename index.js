const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
}

function appendKitten(name){
  var newKitten = kittens.slice();
  newKitten.push(name);
  return newKitten
}

function prependKitten(name){
  var newKitten = kittens.slice();
  newKitten.unshift(name);
  return newKitten
}

function removeLastKitten(name){
  var newKitten = kittens.slice();
  newKitten.pop();
  return newKitten
}

function removeFirstKitten(name){
  var newKitten = kittens.slice();
  newKitten.shift();
  return newKitten
}
