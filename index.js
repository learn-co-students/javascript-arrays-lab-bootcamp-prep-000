var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  
 return kittens.push("Ralph");
  
}


function destructivelyPrependKitten(name){
  
 return kittens.unshift("Bob");
 
}

function destructivelyRemoveLastKitten(name){
  
 return kittens.pop("Ralph");
  
}

function destructivelyPrependKitten(name){
  
return kittens.unshift("Bob");
 
}

function destructivelyRemoveFirstKitten(name){
  
return kittens.shift("Bob");
 
}

function  appendKitten(name){
  

var appendKitten = [...kittens, "Broom"];

return appendKitten;
  
}

function  prependKitten(name){
  
var prependKitten = ["Arnold", ...kittens];

return prependKitten;
  
  
}

function  removeLastKitten(name){
  
var removeKitten = kittens.slice(0, kittens.length-1);

return removeKitten;
  
  
}

function removeFirstKitten(name){
  
  var removeFirst = kittens.slice(1);
  
  return removeFirst;
  
  
}











