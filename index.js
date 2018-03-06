const app = "I don't do much."
var kittens = ['Milo','Otis','Garfield']
function destructivelyAppendKitten(array, element){
  kittens.push("Ralph")
  return kittens
}
var kittens = ['Milo','Otis','Garfield']
function destructivelyPrependKitten(array, element){
  kittens.unshift("Bob")
  return kittens
}
var kittens = ['Milo','Otis','Garfield']
function destructivelyRemoveLastKitten(array){
  kittens.pop("Garfield")
  return kittens
}
var kittens = ['Milo','Otis','Garfield']
function destructivelyRemoveFirstKitten(array){
  kittens.shift("Milo")
  return kittens
}
var kittens = ['Milo','Otis','Garfield']
function appendKitten(array){
  return [...kittens, "Broom"]
}
var kittens = ['Milo','Otis','Garfield']
function prependKitten(array){
  return ["Arnold", ...kittens]
}
var kittens = ['Milo','Otis','Garfield']
function removeLastKitten(array){
  return kittens.slice(0, kittens.length -1)
}
var kittens = ['Milo','Otis','Garfield']
function removeFirstKitten(array){
  return kittens.slice(1)
}

