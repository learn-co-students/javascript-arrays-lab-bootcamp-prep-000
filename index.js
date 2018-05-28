const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){

  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.shift()
  return kittens
}

function appendKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield'];
  let newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield'];
  let newKitties = [name, ...kittens]
  return newKitties
}

function removeLastKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  let newKit = kittens.slice(0, kittens.length -1)
  return newKit
}

function removeFirstKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  let newKittie = kittens.slice(1)
  return newKittie
}
