const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
return [...kittens, name];
}

function prependKitten(name){
return [name, ...kittens];
}

function removeLastKitten(){
  var kittens2 = [];
  kittens2 = kittens.slice(0,-1);
  return kittens2;
}

function removeFirstKitten(){
  var kittens3 = [];
  kittens3 = kittens.slice(1);
  return kittens3;
}
