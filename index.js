const app = "I don't do much."

var kittens = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens

}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens
}

function appendKitten(name){
  var newKitten = [...kittens,name]
  return newKitten
}
function prependKitten(name){
  var newKitten = [name,...kittens]
  return newKitten
}
function removeLastKitten(name){
  var newKitten = kittens.slice(0, kittens.length-1)
  return newKitten
}
function removeFirstKitten(name){
  var newKitten = kittens.slice(1)
  return newKitten
}
