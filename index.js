const app = "I don't do much."
function destructivelyAppendKitten(Name) {
  kittens.push(Name)
  return kittens
}
function destructivelyPrependKitten(Name) {
  kittens.unshift(Name)
  return kittens
} 
function destructivelyRemoveLastKitten(Name) {
  kittens.pop(Name)
  return kittens
}
function destructivelyRemoveFirstKitten(Name) {
  kittens.shift(Name)
  return kittens
}
function appendKitten(Name) {
  return [...kittens, Name]
}
function prependKitten(Name) {
  return [Name, ...kittens]
}
function removeLastKitten(Name) {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten(Name) {
  return kittens.slice(1)
}