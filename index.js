const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];
var name = 'Ralph';

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  var firstElement = kittens.shift();
  return kittens
}

function appendKitten(name){
  var newKittens =  [...kittens, name];
  return newKittens
}

function prependKitten(name){
  var newKittens =  [name,...kittens];
  return newKittens
}

function removeLastKitten(){
  var newKitten = kittens.slice(0,kittens.length-1)
  return newKitten
}

function removeFirstKitten(){
  var newKitten = kittens.slice(1)
  return newKitten
}