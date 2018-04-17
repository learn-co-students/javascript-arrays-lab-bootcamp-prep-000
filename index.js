const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  
  return kittens.pop();
}


function destructivelyRemoveFirstKitten(){
  
  return kittens.shift();
}

function appendKitten(name){
  
var kit2 = [...kittens,name]  
return kit2
}

function prependKitten(name){
  
var kit2 = [name,...kittens]  
return kit2
}

function removeLastKitten(){
  
var kit2 = kittens.slice(0,kittens.length-1)  
return kit2
}

function removeFirstKitten(){
  
  return kittens.slice(-2);
}




