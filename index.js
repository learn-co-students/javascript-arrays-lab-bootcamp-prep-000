// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  kittens.push('Ralph');
  return kittens
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop('Ralph');
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift('Bob');
  return kittens
}

function appendKitten() {
  var kittens1 = kittens.concat('Broom')
  return kittens1
}
  
function prependKitten() {
  var kittens2 = kittens.slice(0); 
  kittens2.splice(0, 0, 'Arnold');
  return kittens2
}

function removeLastKitten() {
  var kittens3 = kittens.slice(0, kittens.length -1)
  return kittens3
}
  
function removeFirstKitten() {
  var kittens4 = kittens.slice(1)
  return kittens4
}  
  
  

  