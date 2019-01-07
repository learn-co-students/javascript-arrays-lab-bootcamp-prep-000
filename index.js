var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  return window.kittens.push(Ralph)
}
 
function destructivelyPrependKitten(Bob) {
  return window.kittens.unshift(Bob)
}

function destructivelyRemoveLastKitten() {
  return window.kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return window.kittens.shift()
}

function appendKitten(name) {
  var newArray = window.kittens.slice()
  newArray.push(name)
  return newArray
}

function prependKitten(name) {
  var newArray = window.kittens.slice()
  newArray.unshift(name)
  return newArray
}

function removeLastKitten() {
  var newArray = window.kittens.slice()
  newArray.pop()
  return newArray
}

function removeFirstKitten() {
  var newArray = window.kittens.slice()
  newArray.shift()
  return newArray
}