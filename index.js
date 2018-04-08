const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop(name);
}

var kittens = ["Milo", "Otis", "Garfield"];

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}



