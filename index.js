const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
destructivelyAppendKitten('Ralph')

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens

}
destructivelyPrependKitten('Ralph')

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
destructivelyRemoveLastKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
destructivelyRemoveFirstKitten()

var kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten(name) {
  var Boo = [...kittens, name]
  return Boo
}
appendKitten('Broom')


var kittens = ['Milo', 'Otis', 'Garfield']
function prependKitten(name) {
  var Boop = [name, ...kittens]
  return Boop
}
prependKitten("Arnold")


var kittens = ['Milo', 'Otis', 'Garfield']
function removeLastKitten() {
  var Beep = kittens.slice(0, kittens.length -1)
  return Beep
}
removeLastKitten()

var kittens = ['Milo', 'Otis', 'Garfield']
function removeFirstKitten() {
  var Beep = kittens.slice(1)
  return Beep
}
removeFirstKitten()
