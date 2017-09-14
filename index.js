const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
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

function appendKitten(){
  var newKittens = [...kittens]
  newKittens.push("Broom")
  return newKittens
}

function prependKitten(name){
   var newKittens = [...kittens]
   newKittens.unshift(name)
   return newKittens
 }

function removeLastKitten(){
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}

function removeFirstKitten(){
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}
