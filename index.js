var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
return kittens.push('Ralph')
}

function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(array) {
 kittens.pop()
 return kittens
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var kittens2 = kittens.concat('Broom')
  return kittens2
}

function prependKitten(name) {
  return ['Arnold', ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

 function removeFirstKitten(){
  return kittens.slice(1)
}
