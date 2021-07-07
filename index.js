var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var fresh = [...kittens,name]

  return fresh
}

function prependKitten(name){
  var fresh = [name, ...kittens]
  return fresh
}

function removeLastKitten(){
  var cats = kittens.slice(0, kittens.length - 1)
  return cats
}

function removeFirstKitten(){
  var cats= kittens.slice(1)
  return cats
}
