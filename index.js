const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

window.kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name){
  return [...kittens, name]
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function prependKitten(name){
  return [name, ...kittens]
}

window.kittens = ['Milo', 'Otis', 'Garfield']

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

window.kittens = ['Milo', 'Otis', 'Garfield']


function removeFirstKitten(){
  return kittens.slice(1)
}
