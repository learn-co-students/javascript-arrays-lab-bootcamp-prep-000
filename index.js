var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  return kittens.push(name)
}


function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}


function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name) {
return  kittens.concat(name)

}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten(name) {
  return kittens.slice(0,-1)
}

function removeFirstKitten(name) {
  return kittens.slice(1)
}