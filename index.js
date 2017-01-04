// const app = "I don't do much."; 
var kittens = ["Milo", "Otis", "Garfield"];
// name = "";
function destructivelyAppendKitten(name) { 
  kittens.push(name);
  return kittens;
} // appends a kitten to the end of the kittens array
destructivelyAppendKitten("Ralph"); 
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
} // prepends a kitten to the beginning of the kittens array: 
destructivelyPrependKitten("Bob"); 
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
} // Function removes the last kitten from the kittens array. No argument
destructivelyRemoveLastKitten();  
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;  
} // Function removes the First kitten from the kittens array. No argument.
destructivelyRemoveFirstKitten(); 
function appendKitten(name) {
  tmparrary = [...kittens, `name`];
  return tmparrary;
} // appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
appendKitten("Broom"); /*
prependKitten(name) {
  
} // prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
prependKitten("addkit");
removeLastKitten(kitwhat) {
  
} // removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
removeLastKitten("kitwhat");
removeFirstKitten(kitwhat) {
  
} // removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
removeFirstKitten("kitwhat");
*/