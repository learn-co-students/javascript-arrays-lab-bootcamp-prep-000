const app = "I don't do much."
var kittens =["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten (name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  const arr2=kittens.concat(name)
  return arr2
}

function prependKitten(name){
  const arr2=[name,...kittens]
  return arr2
}

function removeLastKitten(){
  const arr2=kittens.slice(0,kittens.length-1)
  return arr2
}

function removeFirstKitten(){
  const arr2=kittens.slice(1)
  return arr2
}