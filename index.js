var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  var newarray = kittens.push(name)
  return newarray
}

function destructivelyPrependKitten(name){
  var newarray = kittens.unshift(name)
  return newarray
}

function destructivelyRemoveLastKitten(){
  var newarray = kittens.pop()
  return newarray
}

function destructivelyRemoveFirstKitten(){
  var newarray = kittens.shift()
  return newarray
}

function appendKitten(name){
  var newarray = [...kittens, name]
  return newarray
}

function prependKitten(name){
  var newarray = [name, ...kittens]
  return newarray
}

function removeLastKitten(){
  var newarray = kittens.slice(0, kittens.length -1)
  return newarray
}

function removeFirstKitten(){
  var newarray = kittens.slice(1, kittens.length)
  return newarray
}
