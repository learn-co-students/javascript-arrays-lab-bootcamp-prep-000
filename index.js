const app = "I don't do much.";

function destructivelyAppendKitten(name){
  //global array kittens, we add name kitten to end and return the new array kittens
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  //global array kittens, we add name kitten to start of array and return the new array kittens
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  //we want to remove the last kitten and then return the kittens array
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  //we want to remove the first kitten from the array and return the new array
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  //we want to add the name to the end of the kitten array but not change array forever
  return [...kittens, name];
}
function prependKitten(name){
  //we want to add name of the new kitten to the array
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1);
}
function removeFirstKitten(){
  return kittens.slice(1);
}
