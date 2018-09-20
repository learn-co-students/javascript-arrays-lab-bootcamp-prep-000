// Add your functions and code here

var kittens = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
kittens.splice(3, 0, "Ralph");
return kittens
}

var kittens = [ "Milo", "Otis", "Garfield"];

function destructivelyPrependKitten() {
kittens.splice(0, 0, "Bob");
return kittens
}

var kittens = [ "Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten() {
kittens.pop()
return kittens 
}

var kittens = [ "Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten() {
kittens.shift()
return kittens
}

var kittens = [ "Milo", "Otis", "Garfield"]; 

function appendKitten(name) {
  var fabKittens = [...kittens]
  fabKittens.push(name)
  return fabKittens
}

var kittens = [ "Milo", "Otis", "Garfield"]; 

function prependKitten(name) {
  var cuteKittens = [...kittens]
  cuteKittens.unshift(name)
  return cuteKittens
  }
  
var kittens = [ "Milo", "Otis", "Garfield"]; 

function removeLastKitten() {
  var lessKittens = [...kittens]
  lessKittens.pop()
  return lessKittens
}

var kittens = [ "Milo", "Otis", "Garfield"]; 

function removeFirstKitten() {
  var lostKitten = [...kittens] 
  lostKitten.shift()
  return lostKitten
  }
  
  
  

  
