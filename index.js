const app = "I don't do much."
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
  var array = [];
  array = kittens.slice(0);
  array.push(name);
  return array;
}

function prependKitten(name){
  var array = [];
  array = kittens.slice(0);
  array.unshift(name);
  return array;
}

function removeFirstKitten(){
  var array = [];
  array = kittens.slice();
  array.shift();
  return array;
}

function removeLastKitten(){
  var array = [];
  array = kittens.slice();
  array.pop();
  return array;
}
