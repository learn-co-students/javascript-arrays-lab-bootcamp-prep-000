const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return window.kittens.push(name)

}
function destructivelyPrependKitten(name) {
  return window.kittens.unshift(name)

}
function destructivelyRemoveLastKitten(name) {
  return window.kittens.pop(name)

}
function destructivelyRemoveFirstKitten(name) {
  window.kittens.shift(1)
  return window.kittens

}
function appendKitten(name) {
  return [...window.kittens, name]
  return window.kittens

}
function prependKitten(name) {
  return [name,...window.kittens]
  return window.kittens

}
function removeLastKitten(name) {
  return window.kittens.slice(0, window.kittens.length-1)
  return window.kittens

}
function removeFirstKitten(name) {
  return window.kittens.slice(1)
  return window.kittens
  
}
