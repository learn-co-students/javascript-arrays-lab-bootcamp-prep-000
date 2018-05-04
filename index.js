const app = "I don't do much."

function destructivelyAppendKitten(a){
  kittens.push(a)
  return kittens
}

function destructivelyPrependKitten(a){
  kittens.unshift(a)
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

function appendKitten(a){
  return [...kittens,a]
}

function prependKitten(a){
  return[a,...kittens]
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1,kittens.length)
}
