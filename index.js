const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(ele){
  kittens.push(ele)
  return kittens
}

function destructivelyPrependKitten(ele){
  kittens.unshift(ele)
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

function appendKitten(ele){
  return [...kittens,ele]
}

function prependKitten(ele){
  return [ele,...kittens]
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
