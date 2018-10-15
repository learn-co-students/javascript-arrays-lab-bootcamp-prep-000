var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
} //ok

function destructivelyRemoveLastKitten(name) {
  return kittens.pop()
} //ok

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift()
} //ok

function removeLastKitten(name) {
  return kittens.slice(0,kittens.length - 1)
} //ok

function removeFirstKitten(name) {
  return kittens.slice(1)
} //ok

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
} //ok

