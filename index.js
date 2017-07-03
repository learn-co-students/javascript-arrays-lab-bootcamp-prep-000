const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var soln=kittens.slice(0)
  soln.push(name)
  return soln
}

function prependKitten(name){
  var soln=kittens.slice(0)
  soln.unshift(name)
  return soln
}

function removeLastKitten(){
  var soln=kittens.slice(0,kittens.length-1)
  return soln
}
function removeFirstKitten(){
  var soln=kittens.slice(1)
  return soln
}
