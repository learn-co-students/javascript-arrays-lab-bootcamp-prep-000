function kittens () {
  return kittens
  
}

function destructivelyAppendKitten (name) {
  return kittens.push(`${name}`)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(`${name}`)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
  }
  
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}


function appendKitten (name){
  var appendKitten = kittens.concat(`${name}`)
  return appendKitten
}

//function appendKitten(name){
//  var appendKitten = [...kittens, `${name}`]
//  return appendKitten
//}

function prependKitten (name){
  var newKitten = [`${name}`]
  var prependKitten = newKitten.concat(kittens)
  return prependKitten
}

//function prependKitten(name){
//  var prependKitten = [`${name}`, ...kittens]
//  return prependKitten
//}

function removeLastKitten(){
  return kittens.slice(0, -1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}