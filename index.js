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

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var moarKittehs = [...kittens, name]
  return moarKittehs
}

function prependKitten(name){
  var moarKittehs = [name, ...kittens]
  return moarKittehs
}

function removeLastKitten(){
  var moarKittehs = kittens.slice(0,kittens.length -1)
  return moarKittehs
}

function removeFirstKitten(){
  var moarKittehs = kittens.slice(1)
  return moarKittehs
}
