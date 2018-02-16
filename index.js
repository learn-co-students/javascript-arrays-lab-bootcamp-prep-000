const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
var catOne = ["Ralph"]
var catTwo = ["Bob"]
var catThree = ["Broom"]

function destructivelyAppendKitten(catThree){
  kittens.push(catThree)
  return kittens
}

function destructivelyPrependKitten(catTwo){
  kittens.unshift(catTwo)
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

var kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(catThree) {
var newKittens = [...kittens, catThree];
return newKittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(catThree) {
var newKittens = [ catThree, ...kittens,];
return newKittens;
}

/*var kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten() {
var newKittens = kittens.slice(0, kittens.length - 1)
return newKittens
}
*/
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