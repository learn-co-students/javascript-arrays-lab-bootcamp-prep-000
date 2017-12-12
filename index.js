const app = "I don't do much."
var kittens = restoreKittens()

function restoreKittens(){
  return ["Milo", "Otis", "Garfield"]
}


function destructivelyAppendKitten(name){
  window.kittens = restoreKittens()
  window.kittens.push(name)
  return window.kittens
}

function destructivelyPrependKitten(name){
  window.kittens = restoreKittens()
  window.kittens.unshift(name)
  return window.kittens
}

function destructivelyRemoveLastKitten(){
  window.kittens = restoreKittens()
  window.kittens.pop()
  return window.kittens
}

function destructivelyRemoveFirstKitten(){
  window.kittens = restoreKittens()
  window.kittens.shift()
  return window.kittens
}

function appendKitten(name){
  window.kittens = restoreKittens()
  return [...window.kittens, name]
}

function prependKitten(name){
  window.kittens = restoreKittens()
  return [name, ...window.kittens]
}

function removeLastKitten(){
  window.kittens = restoreKittens()
  return window.kittens.slice(0,window.kittens.length - 1)
}

function removeFirstKitten(){
  window.kittens = restoreKittens()
  return window.kittens.slice(1)
}