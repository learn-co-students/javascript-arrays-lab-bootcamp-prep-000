var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
   return kittens.push("Ralph");
 }
 
 function destructivelyPrependKitten(name) {
   return kittens.unshift("Bob");
 }
 
 function destructivelyRemoveLastKitten(name) {
    return kittens.pop();
 }
 
 function destructivelyRemoveFirstKitten(name) {
   return kittens.shift();
}
 
 function appendKitten(name) {
    var appendKitten = kittens.concat("Broom");
    return appendKitten;
}
 
 function prependKitten(name) {
   var prependKitten = ["Arnold",...kittens];
   return prependKitten;
   
 }
 
 function removeLastKitten(name) {
   var removeLastKitten = kittens.slice(0,-1);
   return removeLastKitten;
 
 }
 
 function removeFirstKitten(name) {
   var removeFirstKitten = kittens.slice(1);
   return removeFirstKitten;
}

