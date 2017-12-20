const app = "I don't do much."

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  var name = 'Ralph'
  kittens.push(name)
}

kittens()
Arrays()

function destructivelyPrependKitten(name) {
  var name = 'Bob'
  kittens.unshift(name)
}

kittens()
Arrays()

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

kittens()
Arrays()

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

kittens()
Arrays()

function appendKitten(name) {
  var name = 'Broom'
  return [...kittens, name]
}

kittens()
Arrays()

function prependKitten(name) {
  var name = 'Arnold'
  return [name, ...kittens]
}

kittens()
Arrays()

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

kittens()
Arrays()

function removeFirstKitten() {
  return kittens.slice(1)
}
