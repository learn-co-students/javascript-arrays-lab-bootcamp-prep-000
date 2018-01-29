const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]; 

var destructivelyAppendKitten = function(name){
  kittens.push(name); 
  return kittens; 
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
  return kittens; 
}

var destructivelyRemoveLastKitten = function(name){
  kittens.pop();
  return kittens; 
}

var destructivelyRemoveFirstKitten = function(name){
  kittens.shift();
  return kittens; 
}

var appendKitten = function(name){
  var k = [...kittens, name]; 
  return k; 
  
}

var prependKitten = function(name){
  var k = [name, ...kittens]; 
  return k; 
} 
var removeLastKitten = function(name){
var k = kittens.slice(0, kittens.length-1); 
return k; 
}
var removeFirstKitten = function(name){
  var k = kittens.slice(1);
  return k; 
  
}
