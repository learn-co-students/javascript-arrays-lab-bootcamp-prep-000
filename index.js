var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)  
}

function appendKitten(name) {
  const newArray = kittens.concat(name)
  return newArray
}

function prependKitten(name) {
  const newArray = (kittens.slice(0,4))
  newArray.unshift(name)
  return newArray
}

function removeLastKitten(name) {
  const newArray = kittens.slice(0, 2)
  return newArray
}

function removeFirstKitten(name) {
  const newArray = kittens.slice(1, 4)
  return newArray
}





