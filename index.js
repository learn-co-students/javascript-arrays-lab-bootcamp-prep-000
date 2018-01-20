const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(){
  const newKittens = [...kittens, "Broom"]
  return newKittens
}

function prependKitten(){
  const newKittens = ["Arnold", ...kittens]
  return newKittens
}

function removeLastKitten(){
  const newKittens = kittens.slice(0, kittens.length -1)
  return newKittens
}

function removeFirstKitten(){
  const newKittens = kittens.slice(1)
  return newKittens
}
