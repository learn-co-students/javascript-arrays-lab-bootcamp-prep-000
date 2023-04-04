var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here



//remove last kitten
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;

  
}

// Preprend kitten

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
}

// remove kitten last name 

function destructivelyRemoveLastKitten(name) {
  kittens.pop(2)
  return kittens;
  
}

// remove first kitten

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(0)
  return kittens;
}

// adds "Broom name " and returns a new array with appended kitten

function appendKitten(name) {

  var newArray = kittens.concat("Broom")
  return newArray
  
}

// prepends a kitten

function prependKitten (name){

     let newArr = kittens.map(function(currentValue){
         return currentValue;
     });

     newArr.unshift("Arnold");

     return newArr;
 }
 
 // remove last kitten
 
 function removeLastKitten (name){

     let newArr = kittens.map(function(currentValue){
         return currentValue;
     });

     newArr.pop(2);

     return newArr;
 }
 
 //remove first kittens
 
 function removeFirstKitten (name){

     let newArr = kittens.map(function(currentValue){
         return currentValue;
     });

     newArr.shift(0);

     return newArr;
 }