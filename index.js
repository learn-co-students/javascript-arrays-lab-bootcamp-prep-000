

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [(name), ...kittens]
}

function removeLastKitten(){
  var newkitten = kittens.slice(0, kittens.length - 1)
  return newkitten
}

function removeFirstKitten(){
  var newkittens = kittens.slice(1)
  return newkittens
}
