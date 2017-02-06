const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens = ['Milo', 'Otis', 'Garfield']
  kittens.push(name)
};

function destructivelyPrependKitten(name) {
  kittens = ['Milo', 'Otis', 'Garfield']
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens = ['Milo', 'Otis', 'Garfield']
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens = ['Milo', 'Otis', 'Garfield']
  kittens.shift(name)
}

function appendKitten(name) {
  var kitties = [...kittens, name]
  return kitties
}

function prependKitten(name) {
  var kitties = [name, ...kittens]
  return kitties
}

function removeLastKitten(name) {
  return kittens.slice(0, -1)
}

function removeFirstKitten(name) {
  return kittens.slice(1)
}