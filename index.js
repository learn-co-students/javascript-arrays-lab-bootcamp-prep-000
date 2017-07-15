var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  var newArray = kittens
  newArray.push(name)
  return newArray
}
function destructivelyPrependKitten(name){
  var newArray = kittens
  newArray.unshift(name)
  return newArray
}
function destructivelyRemoveLastKitten(){
  var newArray = kittens
  newArray.pop()
  return newArray
}
function destructivelyRemoveFirstKitten(){
  var newArray = kittens
  newArray.shift()
  return newArray
}
function appendKitten(name){
  var newArray = [...kittens, name]
  return newArray
}
function prependKitten(name){
  var newArray = [name, ...kittens]
  return newArray
}
function removeLastKitten(){
  var newArray = kittens
  newArray.pop()
  return newArray
}
function removeFirstKitten(){
  var newArray = kittens
  newArray.shift()
  return newArray
}
