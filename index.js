//const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name){
  var newarray = kittens;
  newarray.push(name)
  return newarray
}
function destructivelyPrependKitten(name){
  var newarray = kittens;
  newarray.unshift(name)
  return newarray
}
function destructivelyRemoveLastKitten(){
  var newarray = kittens;
  newarray.pop(name)
  return newarray
}
function destructivelyRemoveFirstKitten(){
  var newarray = kittens;
  newarray.shift(name)
  return newarray
}
function appendKitten(name){
  var newarray = kittens;
  newarray = [...newarray, name]
  return newarray
}
function prependKitten(name){
  var newarray = kittens;
  newarray = [name, ...newarray]
  return newarray
}
function removeLastKitten(){
  var newarray = kittens.slice(0,-1)
  return newarray
}
function removeFirstKitten(){
  var newarray = kittens.slice(1)
  return newarray
}


