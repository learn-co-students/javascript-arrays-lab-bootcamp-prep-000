const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return;
}

function appendKitten(name){
  var addKitty = [...kittens,name];
  return addKitty;
}

function prependKitten(name){
  var addKitty = [name,...kittens];
  return addKitty;
}

function removeLastKitten(){
  return kittens.slice(0,-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
