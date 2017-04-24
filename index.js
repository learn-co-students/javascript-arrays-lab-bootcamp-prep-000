const kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  destructivelyAppendKitten = kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  destructivelyPrependKitten = kittens.unshift(name)
    return kittens
}
function destructivelyRemoveLastKitten() {
  destructivelyRemoveLastKitten = kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  destructivelyRemoveFirstKitten = kittens.shift()
  return kittens
}
function appendKitten(name) {
  const newKittenAppended = [...kittens, name]
  return newKittenAppended
}
function prependKitten(name) {
  const newKittenPrepended = [name, ...kittens]
  return newKittenPrepended
}
function removeLastKitten() {
  const oneLessKittenBack = kittens.slice(0, 2)
  return oneLessKittenBack
}
function removeFirstKitten() {
  const oneLessKittenFront = kittens.slice(1)
  return oneLessKittenFront
}
