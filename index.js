const app = "I don't do much."

function destructivelyAppendKitten(name) {
    kittens.push(name)
}

function destructivelyPrependKitten(name) {
    kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
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
var array = kittens.slice(0,kittens.length-1)
return array
}

function removeFirstKitten(){
  return kittens.slice(1)
}
