var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name);
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(name);
  return kittens;
}
function appendKitten(name){
  var newArray = kittens;
  newArray = newArray.concat(name);
  return newArray;
}
function prependKitten(name){
  var newArray = [name];
  newArray = newArray.concat(kittens);
  return newArray;
}
function removeLastKitten(){
  var newArray = kittens.slice(0, 2);
  return newArray;
}
function removeFirstKitten(){
 var newArray = kittens.slice(1, 3);
  return newArray; 
}

// Add your functions and code here
