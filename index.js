var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(kitten){
kittens.push('Ralph')
}

function destructivelyPrependKitten(kitten){
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(kitten){
  kittens.pop('Garfield')
}

function destructivelyRemoveFirstKitten(kitten){
  kittens.shift('Milo')
}

function appendKitten(kitten){
  return [...kittens, kitten]
}

function prependKitten(kitten){
  return [kitten, ...kittens]
}

function removeLastKitten(kitten){
  kittens.slice("Garfield")
  return [kittens]
}
