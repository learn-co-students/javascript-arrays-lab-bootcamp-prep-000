const app = "I don't do much."
var kittens= ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name){
  const newKittens= [...kittens, name]
  return newKittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name){
  const newKittens= [name, ...kittens]
  return newKittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten(){
  const newKittens = kittens.slice(0, kittens.length-1)
  return newKittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten(){
  const newKittens= kittens.slice(1)
  return newKittens
}