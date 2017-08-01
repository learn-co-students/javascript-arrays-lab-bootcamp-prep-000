const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];
  function kittens() {
    return kittens
  }

  function destructivelyAppendKitten(name) {
    kittens.push("Ralph")
    return kittens
  }

  function destructivelyPrependKitten(name) {
    kittens.unshift("Bob")
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
    var newKittens = [...kittens, name]
    return newKittens
  }

  function prependKitten(name) {
    var newKittens = [name, ...kittens]
    return newKittens
  }

  function removeLastKitten(name) {
    var newKittens = kittens.slice(0, kittens.length - 1)
    return newKittens
  }

  function removeFirstKitten(name) {
    var newKittens = kittens.slice(1)
    return newKittens
  }
