const app = "I don't do much."
var kittnes = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(x){
  kittens.push(x)
  return kittens
}
function destructivelyPrependKitten(x){
  kittens.unshift(x)
  return kittens
}

function destructivelyRemoveLastKitten(x){
  kittens.pop(x)
  return kittens
}

function destructivelyRemoveFirstKitten(x){
  kittens.shift(x)
  return kittens
}

function appendKitten(x){
  return [...kittens, x]


}
function prependKitten(x){
  return [x, ... kittens]
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
