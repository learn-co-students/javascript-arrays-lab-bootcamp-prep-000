const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

destructivelyAppendKitten(name) {
   kittens.push(name)
}

destructivelyPrependKitten(name) {
    kittens.unshift(name)
}

destructivelyRemoveLastKitten() {
  kittens.pop()
}

destructivelyRemoveFirstKitten() {
  kittens.shift()
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
