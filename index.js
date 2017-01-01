const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var kittens2 = [...kittens, name]
  return kittens2
}

function prependKitten(name){
  var kittens2 = [name, ...kittens]
  return kittens2
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
  return newArray
}

function removeFirstKitten(){
  var newArray = kittens.slice(1)
  return newArray
}
