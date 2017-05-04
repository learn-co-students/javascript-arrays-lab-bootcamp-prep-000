const app = "I don't do much."



function destructivelyAppendKitten(name){
  kittens.push("Ralph");

  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");

  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();

  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();

  return kittens;
}

function appendKitten(name){
var kittens2 = [...kittens];

  kittens2.push("Broom");

  return kittens2;
}

function prependKitten(name){
  var kittens2 = [...kittens];
  
  kittens2.unshift("Arnold");

  return kittens2;
}

function removeLastKitten(){
  var kittens2 = [...kittens];

  kittens2.pop();

  return kittens2;
}

function removeFirstKitten(){
  var kittens2 = [...kittens];

  kittens2.shift();

  return kittens2;
}
