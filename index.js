const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

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
  const app = [...kittens, name]
  return app
}

function prependKitten(name) {
  const app = [name, ...kittens]
  return app
}

function removeLastKitten(){
  const app = kittens.slice(0,kittens.length-1)
  return app
}

function removeFirstKitten() {
  const app = kittens.slice(1)
  return app
}
