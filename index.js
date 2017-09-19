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
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens
  return newKittens.slice(0, newKittens.length - 1)
}

function removeFirstKitten(){
  var newKittens = kittens
  return newKittens.slice(1)
}
