const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens;
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens;
}
var kittens = ['Milo', 'Otis', 'Garfield', 'Broom'];
function appendKitten(name){
  return [...kittens, name]
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeFirstKitten(){
  return kittens.slice(1)
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}
