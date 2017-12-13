const app = "I don't do much."

function destructivelyAppendKitten(name){
    var name = "Ralph"
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name){
    var name = "Bob"
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
  var name = "Broom"
  var newArray = [...kittens,name]
  return newArray
}

function prependKitten(name){
  var name = "Arnold"
  var newArray = [name,...kittens]
  return newArray
}

function removeLastKitten(){
  var newArray = kittens.slice(0,2)
  return newArray
}

function removeFirstKitten(){
  var newArray = kittens.slice(-2)
  return newArray
}
