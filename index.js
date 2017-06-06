const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(e){
  kittens.push(e)
  return kittens
}

function destructivelyPrependKitten(e){
  kittens.unshift(e)
  return kittens
}

function destructivelyRemoveLastKitten(e){
  kittens.pop(e)
  return kittens
}

function destructivelyRemoveFirstKitten(e){
  kittens.shift(e)
  return kittens
}

function appendKitten(e){
  return [...kittens,e]
}

function prependKitten(e){
  return [e, ...kittens]
}

function removeLastKitten(e){
  return kittens.slice(0, kittens.length - 1)

}

function removeFirstKitten(e){
return kittens.slice(1)
}
