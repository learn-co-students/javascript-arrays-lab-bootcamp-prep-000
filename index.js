const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

destructivelyAppendKitten(element) {
   kittens.push(element)
}

destructivelyPrependKitten(element) {
    kittens.unshift(element)
}

destructivelyRemoveLastKitten(element) {
  kittens.pop(element)
}

destructivelyRemoveFirstKitten(element) {
  kittens.shift(element)
}

appendKitten(name) {
  return [...kittens, name]
}

prependKitten(name) {
  return [name, ...kittens]
}

removeLastKitten() {
 return kittens.slice(0, kittens.length -1)
}

removeFirstKitten() {
  return kittens.slice(1)
}
