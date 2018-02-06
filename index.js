const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
  function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
var kittens = ['Milo', 'Otis', 'Garfield']
  function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
  }
var kittens = ['Milo', 'Otis', 'Garfield'] 
  function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
  }
var kittens = ['Milo', 'Otis', 'Garfield']
  function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
  }
var kittens = ['Milo', 'Otis', 'Garfield']
  function appendKitten(name) {
  [...kittens, name]
  return [...kittens, name]
  }
var kittens = ['Milo', 'Otis', 'Garfield']
  function prependKitten(name) {
  [name, ...kittens]
  return [name, ...kittens]
  }
var kittens = ['Milo', 'Otis', 'Garfield']
  function removeLastKitten(name) {
  kittens.slice(0, kittens.length - 1)
  return kittens.slice(0, kittens.length - 1)
  }
var kittens = ['Milo', 'Otis', 'Garfield']
  function removeFirstKitten(name) {
  kittens.slice(1)
  return kittens.slice(1)
  }