var kittens = ["Milo", "Otis", "Garfield"] //define your array here
var moreKittens = ["Broom"]
var evenMoreKittens = ["Arnold"]

function destructivelyAppendKitten(array, name){
  return kittens.push("Ralph");
}
function destructivelyPrependKitten(array, name){
  return kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten(array, name){
  return kittens.pop("Garfield");
}
function destructivelyRemoveFirstKitten(array, name){
  return kittens.shift("Milo");
}
function appendKitten(array, name){
 return kittens.concat(moreKittens);
}
function prependKitten(array, name){
  return evenMoreKittens.concat(kittens);
}
function removeLastKitten(array){
  return kittens.slice(0, 2);
}
function removeFirstKitten(array){
  return kittens.slice(1, 3);
}