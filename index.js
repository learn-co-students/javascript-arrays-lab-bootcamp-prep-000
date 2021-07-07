var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis','Garfield'];
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
return kittens.push(name)  
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten () {
  return kittens.shift();
}

var kittens = ["Milo", "Otis", "Garfield"];
function appendKitten(name){
return [...kittens, name]
}

var kittens = ["Milo", "Otis", "Garfield"];
function prependKitten(name){
  return [name, ...kittens]
}

var kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}

var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten(){
  return kittens.slice(1);
}