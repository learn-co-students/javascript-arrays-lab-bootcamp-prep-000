const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
kittens.unshift(name)
return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function appendKitten(name){
  var listOfKittens = [...kittens, name]
  return listOfKittens
}

function prependKitten(name){
  var listOfKittens = [name, ...kittens]
  return listOfKittens
}

function removeLastKitten(){
var listOfKittens = [...kittens]
listOfKittens.pop()
return listOfKittens
}

function removeFirstKitten(){
  var listOfKittens = [...kittens]
  listOfKittens.shift()
  return listOfKittens
}
