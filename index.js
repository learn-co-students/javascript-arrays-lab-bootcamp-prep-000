const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
}
destructivelyAppendKitten('Ralph')


function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
destructivelyPrependKitten("Bob")

function destructivelyRemoveLastKitten(){
  kittens.pop()
}
destructivelyRemoveLastKitten()

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
destructivelyRemoveFirstKitten()

function appendKitten(name){
  return [...kittens,name]
}
appendKitten("Broom")

function prependKitten(name){
  return [name, ...kittens]
}
prependKitten("Arnold")

function removeLastKitten(){
 return kittens.slice(0,kittens.length - 1)

}
removeLastKitten()

function removeFirstKitten(){
  return kittens.slice(1)
}
removeFirstKitten()




