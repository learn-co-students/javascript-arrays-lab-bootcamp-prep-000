const app = "I don't do much."
function destructivelyAppendKitten(name){
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

function prependKitten(name){
  return [name, ...kittens]
}

function appendKitten(name){
  return [...kittens, name]
}

function removeFirstKitten(){
  return kittens.slice(1)
}

function removeLastKitten(){
  return kittens.slice(0,-1)
}
