
var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  console.log(kittens.push(name))
}

function destructivelyPrependKitten(name){
  console.log(kittens.unshift(name))
}

function destructivelyRemoveLastKitten(name){
  console.log(kittens.pop())
}

function destructivelyRemoveFirstKitten(name){
  console.log(kittens.shift(name))
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
