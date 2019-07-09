var kittens = ['Milo', 'Otis', 'Garfield'] //define your array 


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
  let plate = [...kittens,name]
  return plate
}

function prependKitten(name){
  let plate = [name,...kittens]
  return plate
}

function removeLastKitten(){
  let plate = [...kittens]
  plate.pop()
  return plate
}

function removeFirstKitten(){
  let plate = [...kittens]
  plate.shift()
  return plate
}