var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(n){
  return kittens.push(n)
}

function destructivelyPrependKitten(n){
  return kittens.unshift(n)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(n){
  return [...kittens, n]
}

function prependKitten(n){
  return [n, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
