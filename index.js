const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

function appendKitten(name){
  return kittens.push(name)
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeFirstKitten(){
  return kittens.slice(1)
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
