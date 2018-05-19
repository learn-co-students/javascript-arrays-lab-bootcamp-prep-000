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
  var nKittens = kittens.slice();
  nKittens.push(name);
  return nKittens;
}

function prependKitten(name){
  var nKittens = kittens.slice();
  nKittens.unshift(name);
  return nKittens;
}

function removeLastKitten(){
  var nKittens = kittens.slice();
  nKittens.pop();
  return nKittens;
}

function removeFirstKitten(){
  var nKittens = kittens.slice();
  nKittens.shift();
  return nKittens;
}

/*
console.log(kittens);
console.log(appendKitten("something"));
console.log(kittens);
*/