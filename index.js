//const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
 var kitten =[...kittens, name]
 return kitten
}

function prependKitten(name){
  var kitten = [name, ...kittens]
  return kitten
}

function removeLastKitten(){
 return [...kittens.slice(0, 2)]

}

function removeFirstKitten(){
  return [...kittens.slice(1)]
}
