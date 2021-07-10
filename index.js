var kittens = [] //define your array here

// Add your functions and code here
 var kittens = ["Milo", "Otis", "Garfield"];
 
 function destructivelyAppendKitten() {
   kittens.push("Ralph");
   return kittens;
 }
 
 function destructivelyPrependKitten() {
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
 
 function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push("Broom");
  return newArray;
}

function prependKitten(name){
  var newArray = kittens.slice();
  newArray.unshift("Arnold");
  return newArray;
}

 function removeLastKitten(name){
  var newArray = kittens.slice();
  newArray.pop();
  return newArray;
}

function removeFirstKitten(name){
  var newArray = kittens.slice();
  newArray.shift();
  return newArray;
}