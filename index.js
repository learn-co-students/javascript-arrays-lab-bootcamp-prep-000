var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  return(kittens.push(name))
}

function destructivelyPrependKitten(name){
  return(kittens.unshift(name))
}

function destructivelyRemoveLastKitten(){
  return(kittens.pop())
}

function destructivelyRemoveFirstKitten(){
  return(kittens.shift())
}

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten(){
  return(kittens.slice(0, kittens.length - 1))
}

/**the below also works and passes, but does it return a new array?
function removeFirstKitten(){
  return(kittens.slice(1))
}
*/

function removeFirstKitten(){
  var newKittens = kittens.slice(1)
  return newKittens
}