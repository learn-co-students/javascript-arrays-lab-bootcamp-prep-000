
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph){
  kittens.push(Ralph)
  return [...kittens,Ralph]
}

function destructivelyPrependKitten(Bob){
  kittens.unshift(Bob)
  return [Bob,...kittens]
}
function destructivelyRemoveLastKitten(Garfield){
  kittens.pop(Garfield)
  return[...kittens]
}

function destructivelyRemoveFirstKitten(Milo){
  kittens.shift(Milo)
  return[...kittens]
}

function appendKitten(Broom){
  return [...kittens,Broom]
}

function prependKitten(Arnold){
  return[Arnold,...kittens]
}

function removeLastKitten(){
 return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
 return kittens.slice(1)

}
