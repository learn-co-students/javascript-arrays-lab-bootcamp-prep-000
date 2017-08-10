const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
// unshift is destructive and adds
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
// shift is destructive and removes first
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
//work on this
function appendKitten(name){
  return [...kittens, name]
}
function prependKitten(name){
  return [name, ...kittens]
}
// work on this
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
