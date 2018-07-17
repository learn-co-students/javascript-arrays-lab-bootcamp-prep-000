var kittens=["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
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
  var kittenz=[...kittens, name]
  return kittenz
}
function prependKitten(name){
  var kittenz=[name, ...kittens]
  return kittenz
}
function removeFirstKitten(){
  var kittenz=kittens.slice(1)
  return kittenz
}
function removeLastKitten(){
  var kittenz=kittens.slice(0,kittens.length-1)
  return kittenz
}
