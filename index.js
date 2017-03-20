const app = "I don't do much."

var kittens = ['Milo','Otis','Garfield']

function destructivelyAppendKitten (name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten (name) {
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
  var k2 = [...kittens,name]
  return k2
}

function prependKitten(name){
  var k2 = [name,...kittens]
  return k2
}

function removeLastKitten(){
  var k2 = kittens.slice(0,kittens.length - 1)
  return k2
}

function removeFirstKitten(){
  var k2 = kittens.slice(1)
  return k2
}
