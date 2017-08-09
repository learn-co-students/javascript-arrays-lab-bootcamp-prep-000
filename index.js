const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

console.log(`test ${kittens}`)

function destructivelyAppendKitten(kitten){
  return kittens.push(kitten)
}

function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(kitten){
  var newKittens = [...kittens, kitten]
  return newKittens
}

function prependKitten(kitten){
  var newKittens = [kitten, ...kittens]
  return newKittens
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return  kittens.slice(1)
}
