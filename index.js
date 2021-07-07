var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(0, kittens.length -1)
  return kittens
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function appendKitten(name){
  return [...kittens, name]
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten(name){
  return kittens.slice(0, kittens.length -1)
}
function removeFirstKitten(name){
  return kittens.slice(1)
}