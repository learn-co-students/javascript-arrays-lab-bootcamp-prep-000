var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(array){
  array = kittens
  array.pop()
  return array
}

function destructivelyRemoveFirstKitten(array) {
  array = kittens
  array.shift()
  return array
}
function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice([1], kittens.length [2])
}
