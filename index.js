const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
  ]
  
function kittens() {
    var kittens = [
  "Milo",
  "Otis",
  "Garfield"
  ]
    return kittens
  }
  
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

kittens()

function destructivelyPrependKitten(name) {
 kittens.unshift(name)
 return kittens
}

kittens()

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

kittens()

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

kittens()

function appendKitten(name) {
  var cats = [...kittens, name]
  return cats
}

kittens()

function prependKitten(name) {
  var cats = [name, ...kittens]
  return cats
}

kittens()

function removeLastKitten() {
  var cats = kittens.slice(0, kittens.length - 1)
  return cats
}

kittens()

function removeFirstKitten() {
  var cats = kittens.slice(1)
  return cats
}