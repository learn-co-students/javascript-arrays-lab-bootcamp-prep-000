const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}


function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}


function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}


function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}


function appendKitten(name) {
//  var ar = ["Milo", "Otis", "Garfield"]

  var ar = [name]
  ar = [...kittens, name]
  //ar.push(name)

  return ar
}


function prependKitten(name) {

  var ar = [name, ...kittens]
  return ar

}

function removeLastKitten() {
  var ar = [...kittens]
  ar.pop()
  return ar
}

function removeFirstKitten() {
  var ar = [...kittens]
  ar.shift()
  return ar

}
