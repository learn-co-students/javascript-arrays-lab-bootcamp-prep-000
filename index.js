const app = "I don't do much."
var kittens = ["Milo",
                "Otis",
                "Garfield"];
function destructivelyAppendKitten(name){
  kittens[kittens.length] = name
  return kittens}
function destructivelyPrependKitten(name){return(kittens.unshift(name))}
function destructivelyRemoveLastKitten(){return(kittens.pop())}
function destructivelyRemoveFirstKitten(){return(kittens.shift())}
function appendKitten(name){
  var newkittens = kittens.slice()
  newkittens.push(name)
  return newkittens}
function prependKitten(name){
  var twokittens = kittens.slice()
  twokittens.unshift(name)
  return twokittens}
function removeLastKitten(){
  var thing = kittens.slice()
  thing.pop()
  return thing}
function removeFirstKitten(){
  var thing2 = kittens.slice()
  thing2.shift()
  return thing2
}
