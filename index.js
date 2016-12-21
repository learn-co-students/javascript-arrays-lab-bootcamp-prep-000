const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}
function prependKitten(name){
  var moreKittens = kittens.slice(0);
  moreKittens.unshift(name);
  return moreKittens;
}
function appendKitten(name){
  var moreKittens = kittens.slice(0);
  moreKittens.push(name);
  return moreKittens;
}
function removeFirstKitten(name){
  var fewerKittens = kittens.slice(1);
  return fewerKittens;
}
function removeLastKitten(){
  var fewerKittens = kittens.slice(0, kittens.length-1);
  return fewerKittens;
}
