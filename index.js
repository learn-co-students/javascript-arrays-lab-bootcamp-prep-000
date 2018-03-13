const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name){
  appendKitten = [...kittens, name]
  return appendKitten
}

function prependKitten(name) {
  prependKitten = [name, ...kittens]
  return prependKitten
}

function removeLastKitten() {
  removeLastKitten = kittens.slice(0,-1)
  return removeLastKitten
}

function removeFirstKitten() {
  removeFirstKitten = kittens.slice(1)
  return removeFirstKitten
}
