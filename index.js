const app = "I don't do much."
 
 var kittens = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendKitten(name) {
   kittens.push(name)
 }

 function destructivelyPrependKitten(name) {
   kittens.unshift(name)
 }

 function destructivelyRemoveLastKitten(name) {
   kittens.pop(name)
 }

 function destructivelyRemoveFirstKitten() {
   kittens.shift(name)
 }

 function appendKitten(name) {
   var newArray = [...kittens, name];
   return newArray;
 }

 function prependKitten(name) {
   var newArray2 = [name, ...kittens];
   return newArray2;
 }

 function removeLastKitten() {
   var newArray3 = kittens.slice(0,-1);
   return newArray3;
 }

 function removeFirstKitten() {
   var newArray4 = kittens.slice(1);
   return newArray4;
 }
