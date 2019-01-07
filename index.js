var kittens = [] //define your array here

// Add your functions and code here

function destructivelyAppendKitten (name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}


function destructivelyRemoveLastKitten() {
  kittens.pop()
}


function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}


function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
  var kittensP = [name, ...kittens]
  return kittensP
  
}


function removeLastKitten() {
  return kittens.slice(0,2)

}


function removeFirstKitten() {
  return kittens.slice(1)
}