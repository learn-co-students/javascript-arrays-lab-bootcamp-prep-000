const app = "I don't do much."
var kittens=[];

function destructivelyAppendKitten (name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function prependKitten(name) {
  return [name,...kittens];
}
function appendKitten(name) {
  return [...kittens,name];
}

function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray;
}

function removeFirstKitten() {
  var newArray =  kittens.slice(1);
  return newArray;
}
