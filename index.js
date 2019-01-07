var kittens = [] //define your array here

// Add your functions and code here
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
  let arr = kittens.slice();
  arr.push(name);
  return arr;
}

function prependKitten(name){
  return new Array(name).concat(kittens.slice());
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}