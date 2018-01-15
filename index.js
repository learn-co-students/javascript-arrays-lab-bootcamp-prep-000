const app = "I don't do much.";

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
  var addArr = [...kittens, name];
  return addArr;
}

function prependKitten(name){
  var addBefArr = [name, ...kittens];
  return addBefArr;
  
}

function removeLastKitten(){
  var remoLast = kittens.slice(0, kittens.length - 1);
  return remoLast;
}

function removeFirstKitten(){
  var remoFirst = kittens.slice(1);
  return remoFirst;
}