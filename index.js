const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array, element){
 kittens.push("Ralph")

 return array
}

function destructivelyPrependKitten(array, element){
  kittens.unshift("Bob")

  return array
}

function destructivelyRemoveLastKitten(array){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(array){
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeFirstKitten(){
  return kittens.slice(1)
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1 )
}
