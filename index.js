var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(a){
  kittens=[...kittens, a];
  return kittens;
}

function destructivelyPrependKitten(a){
  kittens=[a,...kittens];
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens=kittens.slice(0,kittens.length -1);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens=kittens.slice(1);
  return kittens;
}

function appendKitten(a){
   var x= [...kittens,a];
   return x;
}  

function prependKitten(a){
   var x= [a,...kittens];
   return x;
}  

function removeLastKitten(){
  var x=kittens.slice(0,kittens.length -1);
  return x;
}

function removeFirstKitten(){
  var x=kittens.slice(1);
  return x;
}