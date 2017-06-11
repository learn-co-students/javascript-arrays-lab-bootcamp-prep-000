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
  var changedArray = [...kittens, name]
  return changedArray
 }

 function prependKitten(name) {
  var changedArray = [name, ...kittens]
  return changedArray
 }

 function removeLastKitten() {
  var changedArray = kittens.slice(0, kittens.length - 1)
  return changedArray
 }

function removeFirstKitten() {
  var changedArray = kittens.slice(1)
  return changedArray
}
