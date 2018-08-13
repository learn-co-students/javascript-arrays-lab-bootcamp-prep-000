function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
}
function appendKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  return [...kittens, name]
}
function prependKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  return [name, ...kittens]
}
function removeLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(0, kittens.length -1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}