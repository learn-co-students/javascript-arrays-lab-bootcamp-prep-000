var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function kittens(){
  return kittens;
}

function destructivelyAppendKitten(Ralph){
  kittens. push ("Ralph");
  return kittens;
}
function destructivelyPrependKitten(Bob){
    kittens. unshift("Bob");
    return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens. pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(Broom){
  
  return [...kittens, "Broom"];
}
function prependKitten(Arnold){
  return ["Arnold", ...kittens];
  
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1); 
}
 
function removeFirstKitten(){
  return kittens.slice(1);
}