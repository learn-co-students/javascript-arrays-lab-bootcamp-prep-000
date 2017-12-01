const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function appendKitten(name){
  var arr2 = [...kittens, name]
  return arr2
}

function prependKitten(name){
  var arr2 = [name, ...kittens]
  return arr2
}

function destructivelyPrependKitten(name){
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

function removeLastKitten() {
  var arr = kittens.slice(0, kittens.length - 1)
  return arr
}

function removeFirstKitten() {
  kittens
  var new_arr = kittens.slice(1)
  return new_arr
}
