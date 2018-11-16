var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten){
  return kittens.push(kitten)

}
function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten)
}
function destructivelyRemoveLastKitten(kitten){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(kitten){
  return kittens.shift()
}

function appendKitten(kitten){
  return kittens.concat(kitten)
}

function prependKitten(kitten){
  return [kitten,...kittens];
}
function removeLastKitten(kitten){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(kitten){
  return kittens.slice(1)
}
