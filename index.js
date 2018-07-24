// Add your functions and code here

function destructivelyAppendKitten(x){
  kittens.push(x)
}

function destructivelyPrependKitten(x){
  kittens.unshift(x)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(x){
  return [...kittens, x]
}

function prependKitten(x){
  return [x, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, (kittens.length - 1))
}

function removeFirstKitten(){
  return kittens.slice(1)
}


