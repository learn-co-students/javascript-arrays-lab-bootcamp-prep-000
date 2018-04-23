const app = "I don't do much."
function destructivelyAppendKitten(array, element) {
  return (kittens.push('Ralph'))
}
function destructivelyPrependKitten(array, element) {
  return (kittens.unshift('Bob'))
}
function destructivelyRemoveLastKitten(array, element) {
  return (kittens.pop('Garfield'))
}
function destructivelyRemoveFirstKitten(array, element) {
  return (kittens.shift('Milo'))
}
function appendKitten(name) {
  return (kittens.concat('Broom'))
}
function prependKitten(name) {
  return [name, ...kittens]
}
function removeLastKitten(name) {
  return kittens.slice(0,2)
}
function removeFirstKitten(name) {
  return kittens.slice(1,3)
}