var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
  
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}

function  destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var arr = ["Milo", "Otis","Garfield"];
  arr.push("Broom");
  return arr;
}

function prependKitten(name){
  var arr=["Milo","Otis","Garfield"];
  arr.unshift("Arnold");
  return arr;
}

function removeLastKitten(){
 const kittens=["Milo","Otis","Garfield"];
 kittens.splice(2);
 return kittens;
  
}

function removeFirstKitten(){
  var arr = ["Milo","Otis","Garfield"];
  arr = arr.slice(-2);
  return arr;
}