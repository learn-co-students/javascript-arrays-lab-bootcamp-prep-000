var kittens = ["Milo", "Otis", "Garfield"] //define your array here

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
  var newArray1 = kittens.concat(name)
  return newArray1
}

function prependKitten(name){
  var newArray2 = [name]
  newArray2 = newArray2.concat(kittens)
  return newArray2
}

function removeLastKitten(){
  var newArray3 = kittens.slice(0,2)
  return newArray3
}

function removeFirstKitten(){
  var newArray4 = kittens.slice(1,3)
  return newArray4
}