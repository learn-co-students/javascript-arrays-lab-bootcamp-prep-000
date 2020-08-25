var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(Milo){
  return kittens.push(Milo)
}
function destructivelyPrependKitten(Milo){
  return kittens.unshift(Milo)
}
function destructivelyRemoveLastKitten(Garfield){
  return kittens.pop(Garfield)
}
function destructivelyRemoveFirstKitten(Milo){
  return kittens.shift(Milo)
}
function appendKitten(Otis){
  return [...kittens, Otis]
}
function prependKitten(Milo){
  return [Milo,...kittens]
}
function removeLastKitten(Garfield){
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(Milo){
  return kittens.slice(1)
}
