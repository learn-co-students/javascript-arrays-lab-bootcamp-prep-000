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
   var newKittens = kittens.slice(0);
   newKittens.push(name);
   return newKittens;
}
 
function prependKitten(name){
  var newKittens = kittens.slice(0);
  newKittens.unshift(name);
  return newKittens;
}
 
function removeLastKitten(){
  var newKittens = kittens.slice(0);
  newKittens.pop();
  return newKittens;
}
 
function removeFirstKitten(){
  var newKittens = kittens.slice(0);
  newKittens.shift();
  return newKittens;
}