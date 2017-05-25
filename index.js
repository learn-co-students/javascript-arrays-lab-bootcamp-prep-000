var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name){
var kittens1 = [...kittens,name]
return`${kittens1}`
}

function prependKitten(name){
var kittens2 = [name,...kittens]
return`${kittens2}`
}

function removeLastKitten(){
  var kittens3 = kittens.slice(0, kittens.length - 1)
  return`${kittens3}`
}

function removeFirstKitten(){
  var kittens4 = kittens.slice(1)
  return`${kittens4}`
}
