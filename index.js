var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name){
  kittens.push(name);
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
  return kittens.concat(name);
}

function prependKitten(name){
 return [name,...kittens];
}

function removeLastKitten(){
  return kittens.slice(0,2);
}

function removeFirstKitten(){
  return kittens.slice(1,3);
}