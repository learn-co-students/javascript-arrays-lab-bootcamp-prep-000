var kittens = ["milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
return kittens.push(name)
  
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeFirstKitten() {
  return kittens.slice(1)
  
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
