const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  var newKitties = [...kittens, name]
  return newKitties
}

function prependKitten(name) {
  var newKitties = [name, ...kittens]
  return newKitties
}

function removeLastKitten() {
  var newKitties = kittens.slice(0, kittens.length - 1)
  return newKitties
}

function removeFirstKitten() {
  var newKitties = kittens.slice(1, kittens.length)
  return newKitties
}
