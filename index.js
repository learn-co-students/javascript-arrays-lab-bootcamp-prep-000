const app = "I don't do much."

var kittens = []

function destructivelyAppendKitten(name){
  return kittens.push('Ralph')
}

var kittens = []

function destructivelyPrependKitten(name){
  return kittens.unshift('Bob')
}

var kittens = []

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

var kittens = []

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

var kittens = []

function appendKitten(name){
  return [...kittens, 'Broom']
}

function prependKitten(name){
  return ['Arnold', ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(-2)
}
