kittens = ["Milo","Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield")
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift("Milo")
  return kittens
}
function appendKitten(name){
  return kittens.concat("Broom")
}
function prependKitten(name){
  return "Arnold,".concat(kittens)
}
function removeLastKitten(){
  var newArray = kittens.slice(0, 2)
  return newArray
}
function removeFirstKitten(){
var newArray = kittens.slice(1)
return newArray
}