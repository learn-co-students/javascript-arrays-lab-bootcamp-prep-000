const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var newArr = [];
  newArr.push(...kittens, name);
  return newArr;
}
function prependKitten(name){
  var newArr = [];
  newArr.unshift(name, ...kittens);
  return newArr;
}
function removeLastKitten(){
  var newArr = [];
  newArr.push(...kittens); newArr.pop();
  return newArr;
}
function removeFirstKitten(){
  var newArr = [];
  newArr.push(...kittens); newArr.shift();
  return newArr;
}
