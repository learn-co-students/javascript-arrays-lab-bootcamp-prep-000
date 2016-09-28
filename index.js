const app = "I don't do much."
function destructivelyAppendKitten(name){
  window.kittens.push("Ralph")
  return window.kittens
}

function destructivelyPrependKitten(name) {
  window.kittens.unshift("Bob");
  return window.kittens
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop()
  return window.kittens
}
function destructivelyRemoveFirstKitten(){
  window.kittens.shift()
  return window.kittens
}
function appendKitten(name){
  var kittens = [...window.kittens, name]
  return kittens
}

function prependKitten(name){
  var kittens = [name, ...window.kittens]
  return kittens
}
function removeLastKitten(){
  var kittens = window.kittens.slice(0, window.kittens.length - 1)
  return kittens
}
function removeFirstKitten(){
  var kittens = window.kittens.slice(1)
  return kittens
}
