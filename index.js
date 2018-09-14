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
  return kittens.shift()
}

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten(){
  var newKittens = [...kittens]
  newKittens.pop(name)
  return newKittens
}

function removeFirstKitten(){
  var newKittens = [...kittens]
  newKittens.shift(name)
  return newKittens
}