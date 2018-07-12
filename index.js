// Add your functions and code here
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
  var new_arr = [...kittens, name]
  return new_arr
}

function prependKitten(name){
  var new_arr = [name, ...kittens]
  return new_arr
}

function removeLastKitten(){
  var new_arr = kittens.slice(0, kittens.length -1)
  return new_arr
}

function removeFirstKitten(){
  var new_arr = kittens.slice(1)
  return new_arr
}



















