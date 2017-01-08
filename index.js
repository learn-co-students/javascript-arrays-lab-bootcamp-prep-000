//create kittens array
var kittens = ["Milo", "Otis", "Garfield"]
//append a kitten to the end of the kittens array
function destructivelyAppendKitten(name){
  var addKittenToEnd = kittens.push(name)
  return kittens
}
//append a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name){
  var addKittenToBeginning = kittens.unshift(name)
  return kittens
}
//remove the last kitten from the kittens array
function destructivelyRemoveLastKitten(name){
  var removeLastKitten = kittens.pop(name)
  return kittens
}
//remove the first kitten from the kittens array
function destructivelyRemoveFirstKitten(name){
  var removeFirstKitten = kittens.shift(1)
  return kittens
}
//append a kitten to the end of the kittens array, kittens array unchanged
function appendKitten(name){
  var newArray = [...kittens, name]
  return newArray
}
//prepend a kitten to the beginning of the kittens array  kittens array unchanged
function prependKitten(name){
  var newArray = [name, ...kittens]
  return newArray
}
//remove last kitten from the kittens array  kittens array unchanged
function removeLastKitten(){
  var newArr = kittens.slice(0, -1);
  return newArr
}
//remove last kitten from the kittens array  kittens array unchanged
function removeFirstKitten(){
  return kittens.slice(1)
}
