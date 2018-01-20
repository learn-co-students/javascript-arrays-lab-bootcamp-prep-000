const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

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

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var moreKittens= [...kittens, "Broom"];
  return moreKittens;
}

function prependKitten(name){
  var evenMoreKittens=["Arnold", ...kittens];
  return evenMoreKittens;
}

function removeLastKitten(){
  var fewerKittens=kittens.slice(0, kittens.length-1);
  return fewerKittens;
}

function removeFirstKitten(){
  var evenFewerKittens=kittens.slice(1);
  return evenFewerKittens;
}