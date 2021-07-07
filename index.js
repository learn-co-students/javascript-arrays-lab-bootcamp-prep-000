var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push('Ralph')
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(name){
   kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name,...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
