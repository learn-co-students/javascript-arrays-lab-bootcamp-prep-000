var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield");
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var newKittens = kittens.concat(name);
  return newKittens;
}

function prependKitten(name){
  var newKittens = [...kittens];
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten(){
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
  
}