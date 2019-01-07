var kittens = [] //define your array here

// Add your functions and code here
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
  var newarray = [...kittens];
  newarray.push(name);
  return newarray;
}
function prependKitten(name){
  var newarray = [...kittens];
  newarray.unshift(name);
  return newarray;
}
function removeLastKitten(){
  var newarray=[...kittens];
  newarray.pop();
  return newarray;
  
}
function removeFirstKitten(){
  var newarray= [...kittens];
  newarray.shift();
  return newarray;
  
}