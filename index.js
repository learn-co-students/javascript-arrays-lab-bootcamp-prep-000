const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  //adds kitten to end, returns new array
  var appKitten = [...kittens, name]
  return appKitten
}

function prependKitten(name){
  //adds kitten to beginning, returns new array
  var preKitten = [name, ...kittens]
  return preKitten
}

function removeLastKitten(){
  //removes last kitten, returns new array
  var lastKitten = kittens.slice(0, kittens.length - 1)
  return lastKitten 
}

function removeFirstKitten(){
  //removes first kitten, returns new array 
  var firstKitten = kittens.slice(1)
  return firstKitten
}