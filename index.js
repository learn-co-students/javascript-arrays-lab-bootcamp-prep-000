// anruiz23

var kittens = ['Milo','Otis','Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
  
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
  
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var nkitts = kittens.slice(0)
  nkitts.push(name)
  return nkitts
}

function prependKitten(name){
  var nkitts = kittens.slice(0)
  nkitts.unshift(name)
  return nkitts
}

function removeLastKitten(){
  var len = kittens.length
  var nkitts = kittens.slice(0,len-1)
  return nkitts
}

function removeFirstKitten(){
  var nkitts = kittens.slice(1)
  return nkitts
}