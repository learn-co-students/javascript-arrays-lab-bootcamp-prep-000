var kittens = [] //define your array here

// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens;
};

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
};

var destructivelyRemoveLastKitten = function(){
  kittens.pop();
};

var destructivelyRemoveFirstKitten = function(){
  kittens.shift();
};

var appendKitten = function(name){
  let newKittens = kittens.concat(name);
  return newKittens;
};

var prependKitten = function(name){
  //using the .slice method to copy the array into a new array
  let newKittens = kittens.slice(0, kittens.length);
  newKittens.unshift(name);
  return newKittens;
};

var removeLastKitten = function(){
  //using the .slice method to copy the array into a new array
  let newKittens = kittens.slice(0, kittens.length);
  newKittens.pop(name);
  return newKittens;  
};

var removeFirstKitten = function(){
  //using the .slice method to copy the array into a new array
  let newKittens = kittens.slice(0, kittens.length);
  newKittens.shift(name);
  return newKittens;  
};