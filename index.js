var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph");
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
  
  return [...kittens,"Broom"];
}
function prependKitten(name){
  kittens = ["Arnold", ...kittens];
 return kittens;
}