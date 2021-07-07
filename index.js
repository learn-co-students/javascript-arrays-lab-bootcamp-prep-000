var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  var kittens2 = kittens.push("Ralph");
  return kittens2;
}

function destructivelyPrependKitten(name){
  var kittens3 = kittens.unshift("Bob");
  return kittens3;
}

function destructivelyRemoveLastKitten(){
  var kittens4 = kittens.pop();
  return kittens4;
}

function destructivelyRemoveFirstKitten(){
  var kittens5 = kittens.shift();
  return kittens5;
}

function appendKitten(name){
  var kittens6 = [...kittens, "Broom"];
  return kittens6;
}

function prependKitten(name){
  var kittens7 = ["Arnold", ...kittens];
  return kittens7;
}

function removeLastKitten(){
  var kittens8 = kittens.slice(0, kittens.length-1);
  return kittens8;
}

function removeFirstKitten(){
  var kittens9 = kittens.slice(1);
  return kittens9;
}