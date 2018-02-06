const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
   kittens.unshift(name);
 }
 
 function destructivelyRemoveLastKitten() {
   kittens.pop();
 }
 
 function destructivelyRemoveFirstKitten() {
   kittens.shift();
 }
 
 function appendKitten(name) {
   return [...kittens, name];
 }
 
 function prependKitten(name) {
   return [name, ...kittens];
 }
 
 function removeLastKitten() {
   var newKits = kittens.slice(0, -1);
   return newKits;
 }
 
 function removeFirstKitten() {
   var newKits = kittens.slice(1);
   return newKits;
 }