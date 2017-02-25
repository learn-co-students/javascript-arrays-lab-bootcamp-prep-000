const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeFirstKitten(){
  return kittens.slice(1)
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}
