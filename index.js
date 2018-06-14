const app = "I don't do much."

/*
 1) Arrays  appends a kitten to the end of the kittens array:
     ReferenceError: destructivelyAppendKitten is not defined
      at Context.<anonymous> (test/index-test.js:14:7)

  2) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginningof the kittens array:
     ReferenceError: destructivelyPrependKitten is not defined
      at Context.<anonymous> (test/index-test.js:21:7)

  3) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
     ReferenceError: destructivelyRemoveLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:29:7)

  4) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
     ReferenceError: destructivelyRemoveFirstKitten is not defined
      at Context.<anonymous> (test/index-test.js:37:7)

  5) Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
     ReferenceError: appendKitten is not defined
      at Context.<anonymous> (test/index-test.js:45:7)

  6) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
     ReferenceError: prependKitten is not defined
      at Context.<anonymous> (test/index-test.js:53:7)

  7) Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
     ReferenceError: removeLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:61:7)

  8) Arrays removeFirstKitten() removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged:
     ReferenceError: removeFirstKitten is not defined
      at Context.<anonymous> (test/index-test.js:69:7)
*/

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var newArray= [...kittens,name]
  return newArray
}
function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten() {
  return kittens.slice(0,-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}