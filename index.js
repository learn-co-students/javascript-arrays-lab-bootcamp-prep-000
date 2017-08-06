const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
function reset(){
  kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name)
}

destructivelyAppendKitten("Ralph")
reset()

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
destructivelyPrependKitten("hola")
reset()

function destructivelyRemoveLastKitten(){
  kittens.pop()
}
destructivelyRemoveLastKitten()
reset()

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
destructivelyRemoveFirstKitten()
reset()

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}
appendKitten("Broom")
reset()

function prependKitten(name){
  var newKittens = [name,...kittens]
  return newKittens
}
prependKitten("Broom")
reset()

function removeLastKitten(){
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}

removeLastKitten()
reset()

function removeLastKitten(){
  var newKittens = kittens.slice(0)
  newKittens.pop()
  return newKittens
}

removeLastKitten()
reset()

function removeFirstKitten(){
  var newKittens = kittens.slice(0)
  newKittens.shift()
  return newKittens
}

removeFirstKitten()
reset()
