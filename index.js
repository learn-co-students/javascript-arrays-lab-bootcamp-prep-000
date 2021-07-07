var kittens = [] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  
  kittens.pop()
  
  return kittens

}

function destructivelyRemoveFirstKitten() {
  
  kittens.shift()
  
  return kittens

}

function appendKitten(name) {
  
  var kittens2 = kittens.concat(name)
  
  return kittens2
}

function prependKitten(name) {
  
  var kittens2 = [name].concat(kittens)
  
  return kittens2
}

function removeLastKitten() {
  
  var kittens2 = kittens.slice(0,2);
  
  return kittens2
}

function removeFirstKitten() {
  
  var kittens2 = kittens.slice(1,3);
  
  return kittens2
}