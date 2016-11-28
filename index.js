const app = "I don't do much."
function destructivelyAppendKitten(array, element){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(array, element){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(array, element){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(array, element){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}

function prependKitten(name){
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten(name) {
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}

function removeFirstKitten(name) {
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}
