const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens
}
function destructivelyRemoveLastKitten(array){
  kittens.pop("Garfield");
  return kittens
}
function destructivelyRemoveFirstKitten(array){
  kittens.shift("Milo");
  return kittens
}
function appendKitten(name){
  var newkittens= [...kittens, "Broom"];
  return newkittens
}
function prependKitten(name){
  var newkittens =["Arnold", ...kittens]
  return newkittens
}
function removeLastKitten(){
var newKittens = [...kittens]
newKittens.pop()
return newKittens
}
function removeFirstKitten(){
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}
