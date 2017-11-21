const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var kakis1 = "Ralph";
var kakis2 = "Bob";

function destructivelyAppendKitten() {
  kittens.push(kakis1);
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift(kakis2);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function removeFirstKitten(){
  return kittens.slice(1);
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray
}
function prependKitten(name){
  var newArray = kittens.slice();
  newArray.unshift(name)
  return newArray
}
