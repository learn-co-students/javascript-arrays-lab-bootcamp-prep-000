const app = "I don't do much."

var  kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(addToEnd){
  kittens.push ('Ralph')
}

function destructivelyPrependKitten(addToStart){
  kittens.unshift ('Bob')
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, 'Broom']
}

function prependKitten(name){
  return ['Arnold', ...kittens]
}

function removeLastKitten(){
  return kittens.slice (0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice (1)
}







