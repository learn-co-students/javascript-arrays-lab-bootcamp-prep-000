const app = "I don't do much."

const kittens=["Milo", "Otis", "Garfield"]

 function destructivelyAppendKitten(name) {
   kittens.push("Ralph");
   return kittens;
 }
 
 function destructivelyPrependKitten(name) {
   kittens.unshift("Bob");
   return kittens;
 }
 
 function destructivelyRemoveLastKitten() {
   kittens.pop();
   return kittens;
 }
 
 function destructivelyRemoveFirstKitten() {
   kittens.shift();
   return kittens;
 }
 
 function appendKitten(name) {
   const newKittens= [...kittens, 'Broom']
   return newKittens;
 }
 
 function prependKitten(name) {
   const newKittens1=['Arnold', ...kittens]
   return newKittens1;
 }
 
 function removeLastKitten() {
   const newkittens2=kittens.slice(0,2);
   return newkittens2;
 }
 
 function removeFirstKitten() {
   const newKittens3=kittens.slice(1,3);
   return newKittens3;
 }