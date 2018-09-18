kittens = ["Milo","Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(name){
  let newKittens=kittens.concat(name)
  return newKittens
}

function prependKitten(name){
let newKittens=('Arnold,').concat(kittens)
return newKittens
}

function removeLastKitten(){
  let newKittens=kittens.slice(0,kittens.length-1)
  return newKittens
}

function removeFirstKitten(){
  let newKittens=kittens.slice(1,kittens.length)
  return newKittens
}

