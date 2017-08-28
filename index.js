const app = "I don't do much."

function destructivelyAppendKitten(kitten){
  return kittens.push(kitten)
}

function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten(kitten){
  return kittens.pop(kitten)
}

function destructivelyRemoveFirstKitten(kitten){
  return kittens.shift(kitten)
}

function appendKitten(kitten){
  var new_kittens
  return new_kittens = [...kittens, kitten]
}

function prependKitten(kitten){
  var new_kittens
  return new_kittens = [kitten, ...kittens]
}

function removeLastKitten(kitten){
  var new_kittens
  return new_kittens = kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(kitten){
  var new_kittens
  return new_kittens = kittens.slice(1)
}
