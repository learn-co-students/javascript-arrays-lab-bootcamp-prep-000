function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift(name)
}

function appendKitten(name){
  var appendKittens= [...kittens,name]
  return appendKittens
}

function prependKitten(name){
  var prependKittens=[name,...kittens]
  return prependKittens
}

function removeLastKitten(){
  var sliceLastKittens= kittens.slice(0,kittens.length-1)
  return sliceLastKittens
}

function removeFirstKitten(){
  var sliceFirstKittens=kittens.slice(1)
  return sliceFirstKittens
}