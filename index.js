const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var array = kittens.slice(0)
  array.push(name)
  return array
}
function prependKitten(name) {
  var array = kittens.slice(0)
  array.unshift(name)
  return array
}
function removeLastKitten() {
  var array = kittens.slice(0)
  array.pop()
  return array

}
function removeFirstKitten() {
  var array = kittens.slice(0)
  array.shift()
  return array
}
