function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var arrayNew = [...kittens, name]
  return arrayNew
}

function prependKitten(name){
  var arrayNew = [name, ...kittens]
  return arrayNew
}

function removeLastKitten(){
  var arrayNew = kittens.slice(0, -1)
  return arrayNew
}

function removeFirstKitten(){
  var newArray = kittens.slice(1)
  return newArray
}
