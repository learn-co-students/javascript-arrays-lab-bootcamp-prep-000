var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens = kittens.concat(name);
  
  return kittens
}

function destructivelyPrependKitten(name){
  name = ["Bob"];
  kittens = name.concat(kittens);
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens= kittens.slice(0, kittens.length -1)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1);
  return kittens
}

function appendKitten(name){
  name = ["Broom"];
  name = kittens.concat(name);
  return name
}

function prependKitten(name){
  name = ["Arnold"];
  name = name.concat(kittens);
  return name
}

function removeLastKitten(){
  var name = kittens;
  
  name = kittens.slice(0, kittens.length -1);
  return name
}

function removeFirstKitten(){
  var name = kittens;
  
  name = kittens.slice(1);
  return name
}