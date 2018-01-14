const app = "I don't do much."
function destructivelyAppendKitten(name) {
   window.kittens.push(name)
   return
}
function destructivelyPrependKitten(name) {
   window.kittens.unshift(name)
   return
}
function destructivelyRemoveLastKitten() {
  window.kittens.pop()
  return
}
function destructivelyRemoveFirstKitten() {
  window.kittens.shift()
  return
}
function removeLastKitten() {
  return window.kittens.slice(0,kittens.length -1)
}
function appendKitten(name) {
  return [...window.kittens, name]
}
function prependKitten(name) {
  return [name, ...window.kittens]
}
function removeFirstKitten() {
  return window.kittens.slice(1)
}
