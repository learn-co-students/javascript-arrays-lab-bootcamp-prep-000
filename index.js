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

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var updatedKitten = [...kittens, name];
  return updatedKitten;
}

function prependKitten(name){
  var updatedKitten = [name, ...kittens];
  return updatedKitten;
}

function removeLastKitten(){
  var kittenRemoved = kittens.slice(0, -1);
  return kittenRemoved;
}

function removeFirstKitten(){
  var firstKittenDown = kittens.slice(1);
  return firstKittenDown;
}
