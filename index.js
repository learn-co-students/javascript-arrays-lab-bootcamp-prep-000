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
  var kats = [...kittens, name]
  return kats
}

function prependKitten(name){
  var kats = [name, ...kittens]
  return kats
}

function removeLastKitten(){
  var kats = kittens.slice(0, length - 1)
  return kats
}

function removeFirstKitten(){
  var kats = kittens.slice(1, kittens.length)
  return kats
}
