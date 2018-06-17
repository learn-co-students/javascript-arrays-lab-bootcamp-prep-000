const app = "I don't do much.";

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
  var newArray = [];
  newArray = kittens.slice(0);
  newArray.push(name);
  return newArray;
}

function prependKitten(name){
  var newArray = [];
  newArray = kittens.slice(0);
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten(){
  var newArray = [];
  newArray = kittens.slice(0);
  newArray.pop();
  return newArray;
}

function removeFirstKitten(){
  var newArray = [];
  newArray = kittens.slice(0);
  newArray.shift();
  return newArray;
}