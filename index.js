const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten(name){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift();
}
function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push("Broom")
  return newArray;
}
function prependKitten(name){
  var newArray = kittens.slice();
  newArray.unshift("Arnold")
  return newArray;
}
function removeLastKitten(){
  var newArray = kittens.slice();
  newArray.pop()
  return newArray;
}
function removeFirstKitten(){
  var newArray = kittens.slice();
  newArray.shift()
  return newArray;
}
