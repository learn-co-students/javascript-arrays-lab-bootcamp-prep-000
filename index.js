var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name){
  kittens.push(name)    
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
  
