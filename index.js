// const app = "I don't do much."; 
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) { 
  kittens.push(name);
  return kittens;
} // appends a kitten to the end of the kittens array (append Ralph)
destructivelyAppendKitten("Ralph"); 
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
} // prepends a kitten to the beginning of the kittens array(unshift Bob) 
destructivelyPrependKitten("Bob"); 
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
} // Function removes the last kitten from the kittens array (Ralph). No argument
destructivelyRemoveLastKitten(); 
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;  
} // Function removes the First kitten from the kittens array(shift Bob) No argument.
destructivelyRemoveFirstKitten();  
function appendKitten(name) { // var name = ""; is not needed to initialize.
  var myarray = [...kittens, name]; // took me some time to figure out, var was needed for the new array.
  return myarray;
} // appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
appendKitten("Broom"); 
function prependKitten(name) {
  var myarray = [ name, ...kittens]; // took me some time to figure out, var was needed for the new array.
  return myarray;  
} // prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
prependKitten("Arnold");
function removeLastKitten() {
  var myarray = [...kittens]; // so this adds all kittens array elements starting at element0? Yes it works.
  myarray.pop();
  return myarray;  
} // removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
removeLastKitten();
removeFirstKitten() {
  var myarray = [...kittens]; // so this adds all kittens array elements starting at element0? Yes it works.
  myarray.shift();
  return myarray; 
} // removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
removeFirstKitten();
