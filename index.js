const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift()
}

function appendKitten(name){
  return [...kittens, "Broom"]
}

function prependKitten(name){
  return ["Arnold", ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}