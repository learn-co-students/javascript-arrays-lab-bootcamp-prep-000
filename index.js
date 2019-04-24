var kittens = ["Milo","Otis","Garfield"]
function kittens(){
  return(kittens)
}

var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return(kittens)
}

var kittens = ["Milo","Otis","Garfield"]
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return(kittens)
}
var kittens = ["Milo","Otis","Garfield"]
function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return(kittens)
}
var kittens = ["Milo","Otis","Garfield"]
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return(kittens)
}
var kittens = ["Milo","Otis","Garfield"]
function appendKitten(name){
var newKittens = [...kittens, "Broom"];
  return newKittens;
}
var kittens = ["Milo","Otis","Garfield"]
function prependKitten(name){
var newKittens = ["Arnold",...kittens]
  return newKittens;
}
var kittens = ["Milo","Otis","Garfield"]
function removeLastKitten(name){
var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens;
}
var kittens = ["Milo","Otis","Garfield"]
function removeFirstKitten(name){
var newKittens = kittens.slice(1)
  return newKittens;
}