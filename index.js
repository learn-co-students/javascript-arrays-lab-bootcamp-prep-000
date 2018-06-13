const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendKitten(element) {
  
return kittens.push(element)
}

function destructivelyPrependKitten(element) {
  
  return kittens.unshift(element)
}

function destructivelyRemoveLastKitten(element){
  
  return kittens.pop(element)
}

function destructivelyRemoveFirstKitten(element){
  
  return kittens.shift(element)
}

function appendKitten(element){
  
  return [...kittens, element]
}

function prependKitten(element){
  
  return [element, ...kittens]
}

function removeLastKitten(element){
  
return kittens.slice(0, kittens.length -1)
  
}

function removeFirstKitten(element){
  
  return kittens.slice(1)
}
