const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name){
  var newKittens = [...kittens, name];
  return newKittens
}

kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name){
  var newKittens = [name,...kittens];
  return newKittens
}

kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten(){
  var newKittens = kittens.slice(0,kittens.length - 1);
  return newKittens
}

kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens
}
