const app = "I don't do much."
var kittens = ["Milo", "Otis","Garfield" ]
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
  var moreKittens = [...kittens,name]
  return moreKittens
}

function prependKitten(name){
  var moreKittens = [name, ...kittens]
  return moreKittens
}

function removeLastKitten(){
  var lessKittens = kittens.slice(0,kittens.length-1)
  return lessKittens
}

function removeFirstKitten(){
  var lessKittens = kittens.slice(1)
  return lessKittens
}
