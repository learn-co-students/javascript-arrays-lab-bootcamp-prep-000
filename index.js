var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)

}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}



function appendKitten (name) {
  var cats = [...kittens, name]
  return cats

}

function prependKitten (name) {
  var cats = [name, ...kittens]
  return cats

}

function removeLastKitten () {
  return kittens.slice(0, -1)
}

function removeFirstKitten () {
  return kittens.slice(1)
}
