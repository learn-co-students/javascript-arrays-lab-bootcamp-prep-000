const app = "I don't do much."

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
  var array1 = kittens.slice(0)
  array1.push(name)
  return array1
}
function prependKitten(name){
  var array1 = kittens.slice(0)
  array1.unshift(name)
  return array1
}
function removeLastKitten(){
  var array1 = kittens.slice(0,-1)
  return array1
}
function removeFirstKitten(){
  var array1 = kittens.slice(0)
  array1.shift(name)
  return array1
}
