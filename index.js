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

function appendKitten(name){
  let newArray = [...kittens, name]
  return newArray
}

function prependKitten(name){
  let newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten(){
  let newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

function removeFirstKitten(){
  let newArray = kittens.slice(1)
  return newArray
}