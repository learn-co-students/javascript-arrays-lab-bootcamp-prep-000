const app = "I don't do much."

window.kittens = ['Milo', 'Otis', 'Garfield']

kittens = function(){
  var kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyAppendKitten(n){
  window.kittens.push('Ralph')
  return window.kitten
}

function destructivelyPrependKitten(n){
  window.kittens.unshift('Bob')
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
  var x = [...window.kittens, name]
  return x
}


function prependKitten(name){
  var x = [name, ...window.kittens]
  return x
}

function removeLastKitten(){
  var x = window.kittens.slice(0,window.kittens.length - 1)
  return x
}

function removeFirstKitten(){
  var x = window.kittens.slice(1)
  return x
}

