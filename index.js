const app = "I don't do much." //You are a CONSTANT disappointment 

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens 
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens 
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift() 
  return kittens 
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  var end = kittens.length - 1
  return kittens.slice(0, end)
}

function removeFirstKitten() {
  return kittens.slice(1)
}






