const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var array = [...kittens, name]
  return array
}

function prependKitten(name){
  var array = [name,...kittens]
  return array
}

function removeLastKitten(){
  var array = kittens.slice(0, kittens.length - 1)
  return array
}

function removeFirstKitten(){
  var array = kittens.slice(1)
  return array
}
