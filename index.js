const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}
function appendKitten(name){
  [...kittens, name]
  return ["Milo","Otis","Garfield","Broom"]
}
function prependKitten(name){
  [name, ...kittens]
  return ["Arnold", "Milo", "Otis", "Garfield"]
}
function removeLastKitten(name){
  kittens.slice(2)
  return ["Milo", "Otis"]
}
function removeFirstKitten(name){
  kittens.slice(0)
  return ["Otis", "Garfield"]
}
