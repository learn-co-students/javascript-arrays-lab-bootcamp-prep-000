var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
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
  var kittenz = kittens.concat(name)
  return kittenz
}

function prependKitten(name) {
  var kittenz = [name,...kittens]
  return kittenz
}

function removeLastKitten() {
  var kittenz = kittens.slice(0,kittens.length-1)
  return kittenz
}
function removeFirstKitten() {
  var kittenz = kittens.slice(1)
  return kittenz
}
