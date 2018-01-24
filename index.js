var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
 kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(Broom){
  return [...kittens, Broom]
}

function prependKitten(Arnold){
  return [Arnold,...kittens]
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
