var kittens = ["Milo","Otis","Garfield"]; //define your array here

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
function removeFirstKitten(name){
  var myArray =kittens.slice(1);
  return myArray;
}
function removeLastKitten(name){
  var newArray =kittens.slice(0,kittens.length-1);
  return newArray;
}
function appendKitten(name){
  var realArray = [...kittens,name];
  return realArray;
}
function prependKitten(name){
return  [name,...kittens];
  
}
