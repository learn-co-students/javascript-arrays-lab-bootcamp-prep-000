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

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  var litter = [...kittens,name]
  return litter
}

function prependKitten(name){
  var litter = [name,...kittens]
  return litter
}

function removeLastKitten(){
  var litter = kittens.slice(0,2)
  return litter
}

function removeFirstKitten(){
  var litter = kittens.slice(1,3)
  return litter
}
