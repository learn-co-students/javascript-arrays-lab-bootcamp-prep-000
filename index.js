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
  var arr2 = [...kittens, name]
  return arr2
}

function prependKitten(name){
  var arr2 = [name, ...kittens]
  return arr2
}

function removeLastKitten(){
  var arr2 = kittens.slice(0,-1)
  return arr2
}

function removeFirstKitten(){
  var arr2 = kittens.slice(1, kittens.length)
  return arr2
}