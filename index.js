var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(element){
  kittens.push(element)
  return kittens
}

resetKittens()

function destructivelyPrependKitten(element){
  kittens.unshift(element)
  return kittens
}

resetKittens()

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

resetKittens()

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

resetKittens()

function appendKitten(element){
  var newKitten = [...kittens, element]
  return newKitten
}

resetKittens()

function prependKitten(element){
  var newKitten = [element, ...kittens]
  return newKitten
}

resetKittens()

function removeLastKitten(){
  var lessKitten = kittens.slice(0, kittens.length - 1)
  return lessKitten
}

resetKittens()

function removeFirstKitten(){
  var lessKitten = kittens.slice(1)
  return lessKitten
}

resetKittens()









function resetKittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}
