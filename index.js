var kittens = ["Milo", "Otis", "Garfield"] //define your array here

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
  let kittens2 = [...kittens, name]
  return kittens2
}

function prependKitten(name){
  let kittens2 = [name, ...kittens]
  return kittens2
}

function removeLastKitten(name){
  let kittens2 = kittens.slice(0, kittens.length-1)
  return kittens2
}

function removeFirstKitten(name){
  let kittens2 = kittens.slice(1, kittens.length)
  return kittens2
}
