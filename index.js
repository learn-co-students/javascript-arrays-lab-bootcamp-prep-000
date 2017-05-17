const app = "I don't do much."

var kittens = ["Gaby", "Sonson", "Buttercup", "Horseshoe"];

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
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten(){
  //var arrayLength = kittens.length;
  var lastElement = kittens.length - 1;
  var newArray = kittens.slice(0, lastElement);
  return newArray;
}

function removeFirstKitten(){
  var newArray = kittens.slice(1, kittens.length);
  return newArray;
}
