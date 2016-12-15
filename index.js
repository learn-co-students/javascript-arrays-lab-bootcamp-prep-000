const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  var newKittens = ["Milo", "Otis", "Garfield"];
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name){
  var newKittens = ["Milo", "Otis", "Garfield"];
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten(name){
  var newKittens = ["Milo", "Otis", "Garfield"];
  newKittens.pop(name);
  return newKittens;
}

function removeFirstKitten(name){
  var newKittens = ["Milo", "Otis", "Garfield"];
  newKittens.shift(name);
  return newKittens;
}
