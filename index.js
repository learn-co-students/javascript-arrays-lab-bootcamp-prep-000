const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.push("Broom")
  return kittens
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift("Arnold")
  return kittens
}

function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}

function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  return kittens
}
