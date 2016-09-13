const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var newkat = new Array


function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
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

function removeLastKitten(){
  newkat = kittens.slice(0,2);
  return newkat;
}

function removeFirstKitten(){
  newkat = kittens.slice(1,3);
  return newkat;
}

function appendKitten(name){
  var newKitten = [...kittens];
  newKitten.push(name);
  return newKitten;
}

function prependKitten(name){
  var newKitten = [...kittens];
  newKitten.unshift(name);
  return newKitten;
}
