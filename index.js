var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  var kitten = kittens.slice(0,kittens.length-1)
  return kitten
}

function removeFirstKitten(){
  var kitten = kittens.slice(1,kittens.length)
    return kitten
}
