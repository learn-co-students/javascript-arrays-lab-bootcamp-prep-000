var kittens = ["Milo", "Otis", "Garfield"]
//  PUSH appends to end of array
function destructivelyAppendKitten(kitten){
  kittens.push(kitten)
  return kittens
}
//UNSHIFT prepends to beginning of array
function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten)
  return kittens
}
//POP removes from end of array
function destructivelyRemoveLastKitten(kitten){
  kittens.pop(kitten)
  return kittens
}
//SHIFT removes from beginning of array
function destructivelyRemoveFirstKitten(kitten){
  kittens.shift(kitten)
  return kittens
}
//  SPREAD OPERATOR... RETURNS NEW ARRAY
function appendKitten(kitten){
 return [...kittens, kitten]
}
// SPREAD OPERATOR... RETURNS NEW ARRAY
function prependKitten(kitten){
  return [kitten,...kittens]
}
//
function removeFirstKitten(){
  var kitten = kittens.slice(1)
  return kitten
}

function removeLastKitten(){
  var kitten = kittens.slice(0,kittens.length - 1)
  return kitten
}
