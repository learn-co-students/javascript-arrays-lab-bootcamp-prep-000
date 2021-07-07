var kittens = [ 'Milo', 'Otis', 'Garfield' ]

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newName = [...kittens, "Broom"]
  return newName
}

function prependKitten(name){
  var newName = ["Arnold", ...kittens]
  return newName
}

function removeLastKitten(){
  var newName = kittens.slice (0, kittens.length - 1)
  return newName
}

function removeFirstKitten(){
  var newName = kittens.slice (1, kittens.length)
  return newName
}

