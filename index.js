const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
  
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  
}
function appendKitten(name){
  var newKittens = [...kittens,name]
  return newKittens
}
function prependKitten(name){
  var newKittens=[name, ...kittens]
  return newKittens
}
function removeLastKitten(name){
  var newKittens=kittens.slice(0, kittens.length-1)
  return newKittens
}

function removeFirstKitten(name){
  var newKittens=kittens.slice(1)
  return newKittens
}