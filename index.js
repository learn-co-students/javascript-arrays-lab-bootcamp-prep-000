const app = "I don't do much."

function destructivelyAppendKitten (name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function prependKitten(name){
  var temp = [name,...kittens]
  return temp
}

function appendKitten(name){
  var temp = [...kittens,name]
  return temp
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
