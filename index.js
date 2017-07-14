const kittens = [`Milo`,`Otis`,`Garfield`]

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}
function appendKitten(name){
  var moreKittens = [...kittens, name]
  return moreKittens
}
function prependKitten(name){
  var lessKittens = [name, ...kittens]
  return lessKittens
}
function removeLastKitten(){
  var dropKitten = kittens.slice(0, kittens.length - 1)
  return dropKitten
}
function removeFirstKitten(){
  var cutKitten = kittens.slice(1)
  return cutKitten
}
