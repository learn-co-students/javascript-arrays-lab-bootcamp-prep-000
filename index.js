var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  let newA = [...kittens, name]
  return newA
}

function prependKitten(name){
  let newA = [name, ...kittens]
  return newA
}

function removeLastKitten(name){
  let newA = kittens.slice(0, kittens.length - 1)
  return newA
}

function removeFirstKitten(name){
  let newA = kittens.slice(1, kittens.length)
  return newA
}


