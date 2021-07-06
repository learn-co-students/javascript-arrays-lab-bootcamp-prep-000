var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}

// Test 2

var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

// Test 3 

var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyRemoveLastKitten(){
  kittens.pop()
}


//Test 4 

var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}


//Test 5

var kittens = ["Milo", "Otis", "Garfield"]; 

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

//Test 6

var kittens = ["Milo", "Otis", "Garfield"]; 

function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
}

//Test 7

var kittens = ["Milo", "Otis", "Garfield"]; 

function removeLastKitten(){
  var newKittens = kittens.slice(0, 2)
  return newKittens 
}

//Test 8 
 
var kittens = ["Milo", "Otis", "Garfield"];
 
function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}










