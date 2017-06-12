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
  var newKitten = [...kittens, name]
  return newKitten
}

function prependKitten(name){
  var newPrepend = [name, ...kittens]
  return newPrepend
}

function removeLastKitten(){
  var newArray = kittens.slice(0,2)
  return newArray
}

function removeFirstKitten(){
  var newArrayKittenz = kittens.slice(1)
  return newArrayKittenz
}
