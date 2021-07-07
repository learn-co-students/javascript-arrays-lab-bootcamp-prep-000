var kittens = [] //define your array here

// Add your functions and code here
var kittens = [];
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}

function appendKitten(name){
  var newKittens = kittens.slice(0, kittens.length);
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name){
  var newKittens = kittens.slice(0, kittens.length);
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length);
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(0, kittens.length);
  newKittens.shift();
  return newKittens;
}

