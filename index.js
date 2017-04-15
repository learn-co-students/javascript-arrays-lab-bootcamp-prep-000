const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(append){
  kittens.push(append)
}

function destructivelyPrependKitten(prepend){
  kittens.unshift(prepend)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()

}

function appendKitten(name){
  var tempKitten = [...kittens, `${name}`]
  return tempKitten
}

function prependKitten(name){
  var tempKitten = [`${name}`, ...kittens]
  return tempKitten
}

function removeLastKitten(){
  var tempKitten = kittens.slice(0, kittens.length - 1)
  return tempKitten
}

function removeFirstKitten(){
  var tempKitten = kittens.slice(1, kittens.length) 
  return tempKitten
}
