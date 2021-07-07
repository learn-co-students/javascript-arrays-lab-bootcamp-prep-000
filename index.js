var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var new_kits = kittens.concat(name)
  return new_kits
}

function prependKitten(name) {
  var new_kits = [name]
  return new_kits.concat(kittens)
}

function removeLastKitten() {
  var new_kits = kittens.slice(0, -1)
  return new_kits
}

function removeFirstKitten() {
  var new_kits = kittens.slice(1)
  return new_kits
}
