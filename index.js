const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  var newKittens = [...kittens,name]
  return newKittens
}
function prependKitten(name){
  var newkittens = [name,...kittens]
  return newkittens
}
function removeLastKitten(){
  var a = kittens.slice(0,kittens.length - 1)
  return a
}
function removeFirstKitten(){
  var b = kittens.slice(1,kittens.length)
  return b
}
