const app = "I don't do much."

function destructivelyAppendKitten(entry) {
  //access an array, add an element to the end and return mutated new array
  
  kittens.push(entry)
  return kittens
}

function destructivelyPrependKitten(entry) {
  //acces kittens, add an element to beginning and return the mutated kittens array
  
  kittens.unshift(entry)
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

function appendKitten(entry) {
  var cats = [...kittens, entry]
  return cats
}

function prependKitten(entry) {
  var cats = [entry, ...kittens]
  return cats
}

function removeLastKitten() {
  var cats = kittens.slice(0, kittens.length - 1)
  return cats
}

function removeFirstKitten() {
  var cats = kittens.slice(1)
  return cats
}