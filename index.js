const app = "I don't do much."
var kittens = ["Milo", "Otis","Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(0);
}

function appendKitten(name){
  var array = [...kittens, name]
  return array;
}

function prependKitten(name){
  var array = [name, ...kittens]
  return array;
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  var array = kittens.slice(1)
  return array;
}
