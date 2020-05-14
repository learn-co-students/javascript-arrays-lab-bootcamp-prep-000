var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)

  return kittens

}

function destructivelyPrependKitten(name){
  kittens.unshift(name)

  return kittens

}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens

}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens

}

function appendKitten(name){
  var a = [...kittens, name]
  return a

}

function prependKitten(name){
  var b = [name, ...kittens]
  return b

}

function removeLastKitten(name){
  var k = kittens.slice(0, kittens.length - 1)
  return k

}

function removeFirstKitten(name){
  var h = kittens.slice(1)
  return h

}
