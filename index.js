// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
console.log(kittens)

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  var newCat = [name]
  var moreKittens = kittens.concat(newCat)
  return moreKittens
}
function prependKitten(name){
  var newCat = [name]
  var moreKittens = newCat.concat(kittens)
  return moreKittens
}
function removeLastKitten(){
  var fewerCats = kittens.slice(0, 2)
  return fewerCats
}
function removeFirstKitten(){
  var fewerCats = kittens.slice(1)
  return fewerCats
}
