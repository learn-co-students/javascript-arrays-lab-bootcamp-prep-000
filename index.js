var kittens = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendKitten(name){
   kittens.push(name);
   return kittens;
 }

 function destructivelyPrependKitten(name){
   kittens.unshift(name);
   return kittens;
 }

 function destructivelyRemoveLastKitten(){
   kittens.pop();
   return kittens;
 }

 function destructivelyRemoveFirstKitten(){
   kittens.shift();
   return kittens;
 }

 function appendKitten(name){
   var resultArray = [...kittens, name];
   return resultArray;
 }

 function prependKitten(name){
   var resultArray = [name, ...kittens];
   return resultArray;
 }

 function removeLastKitten(){
   var resultArray = [...kittens];
   resultArray.pop();
   return resultArray;
 }

 function removeFirstKitten(){
   var resultArray = [...kittens];
   resultArray.shift();
   return resultArray;
 }
