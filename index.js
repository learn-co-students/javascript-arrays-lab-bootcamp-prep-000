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
  var new_kittens = kittens
  return [...kittens, name]
}

function prependKitten(name){
  var new_kittens = kittens
  return [name, ...kittens]
}

function removeLastKitten(){
  var new_kittens = kittens.slice(0, kittens.length -1)
  return new_kittens
}
function removeFirstKitten(){
  var new_kittens = kittens.slice(1)
  return new_kittens
}
