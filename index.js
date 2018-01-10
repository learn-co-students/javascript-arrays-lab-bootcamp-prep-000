const app = "I don't do much."

window.kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(array){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(array){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  window.kittens1=[...kittens,name]
  return kittens1
}

function prependKitten(name){
  window.kittens1=[name,...kittens]
  return kittens1
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}