const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
//1
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
//2
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
//3
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}
//4
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}
//5
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name){
  var NewKittens = [...kittens,name]
  return NewKittens
}
//6
var kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name){
  var PreKittens = [name,...kittens]
  return PreKittens
}
//7
var kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten(){
  var NoLastKitten = kittens.slice(0,2)
  return NoLastKitten
}
//8
var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten(){
  var NoFirstKitten = kittens.slice(1)
  return NoFirstKitten
}
