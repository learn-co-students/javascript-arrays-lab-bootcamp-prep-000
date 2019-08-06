var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

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
  var newKitties = [...kittens, name];
  return newKitties;
}


function prependKitten(name){
  var newKittyCats = [name, ...kittens];
  return newKittyCats;
}


function removeLastKitten(){
  var removeKitty = [...kittens];
  removeKitty.pop();
  return removeKitty;
}


function removeFirstKitten(){
  var goneKitty = [...kittens];
  goneKitty.shift();
  return goneKitty;
}