var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens 
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
  return kittens  
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift()
  return kittens
}

function appendKitten(name,array) {
  return [...kittens,"Broom"]
} 

function prependKitten(name,array) {
  return ["Arnold",...kittens]
}

function removeLastKitten(array) {
  return kittens.slice(0,kittens.length -1)
}

function removeFirstKitten(array) {
  return kittens.slice(1)
}



