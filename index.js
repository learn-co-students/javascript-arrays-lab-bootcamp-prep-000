const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(string){
  kittens.push(string)
}

function destructivelyPrependKitten(string){
  kittens.unshift(string)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(string){
  return [...kittens, string]
}

function prependKitten(string){
  return [string, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(){
  return kittens.slice(-2)
}
