// const app = "I don't do much."; 
var kittens = ["Milo", "Otis", "Garfield"];
// name = "";
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
function appendKitten(name) {
  myarray = [...kittens, `name`];
  var mynewarray = myarray;
  return mynewarray;
} // appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
appendKitten("Broom"); /*
function prependKitten(name) {
  
} // prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
prependKitten("addkit");
removeLastKitten(kitwhat) {
  
} // removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
removeLastKitten("kitwhat");
removeFirstKitten(kitwhat) {
  
} // removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
removeFirstKitten("kitwhat");
*/