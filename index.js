var kittens = ['Milo', 'Otis', 'Garfield']

// Add your functions and code here

function destructivelyAppendKitten(b) {
  return kittens.push(b)  
}

function destructivelyPrependKitten(b) {
  return kittens.unshift(b)
}

function destructivelyRemoveLastKitten(b) {
  return kittens.pop(b) 
}

function destructivelyRemoveFirstKitten(b) {
  return kittens.shift(b)
}

function appendKitten(b) {
  return kittens.concat(b)  
}

function prependKitten(b) {
  return [b, ...kittens]
}

function removeLastKitten(b) {
  return kittens.slice(0, -1)
}

function removeFirstKitten(b) {
  return kittens.slice(1)
}