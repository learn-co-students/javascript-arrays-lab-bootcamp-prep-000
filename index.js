const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens
}

function appendKitten(name){
  var myKittens = kittens
  myKittens = [...kittens,name]
  return myKittens
}

function prependKitten(name){
  var myKittens = kittens
  myKittens = [name,...kittens]
  return myKittens
}

function removeLastKitten(){
  var myKittens = kittens
  myKittens = kittens.slice(0,kittens.length-1)
  return myKittens
}

function removeFirstKitten(){
  var myKittens = kittens
  myKittens = kittens.slice(-2)
  return myKittens
}
