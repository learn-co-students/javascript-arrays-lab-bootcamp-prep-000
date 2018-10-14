//1 Define Names
var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
//Destructive methods: push()-ads to end, pop()-takes from the end, shift()-takes from beginning, unshift()-adds to beginning


//DESTRUCTIVE FUNCTIONS ####################################


//2 destructivelyAppendKitten
function destructivelyAppendKitten(name) {
  
  kittens.push(name);
  return kittens;
  
}


//3 destructivelyPrependKitten(name)
function destructivelyPrependKitten(name) {
  
  kittens.unshift(name);
  return kittens;
  
}


//4 destructivelyRemoveLastKitten()
function destructivelyRemoveLastKitten() {
  
  kittens.pop(1);
  return kittens;
  
}


//5 destructivelyRemoveFirstKitten()
function destructivelyRemoveFirstKitten() {
  
  kittens.shift();
  return kittens;
  
}


//NON DESTRUCTIVE FUNCTIONS ####################################

//6 appendKitten(name) 
function appendKitten(name) {
  
  return kittens.concat(name);
  
}


//7 prependKitten(name)
function prependKitten(name) {
  
  return [].concat(name, kittens);
  
}


//8 removeLastKitten()
function removeLastKitten() {
  
  return kittens.slice(0, kittens.length - 1);
  
}


//9 removeFirstKitten()
function removeFirstKitten() {
  
  return kittens.slice(1, kittens.length);
  
}


