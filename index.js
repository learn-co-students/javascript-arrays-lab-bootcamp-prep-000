var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var newKittens = kittens.push(name);
  return newKittens;
}

function destructivelyPrependKitten(name){
  var newKittens = kittens.unshift(name);
  return newKittens;
}

function destructivelyRemoveLastKitten(){
  var newKittens = kittens.pop();
  return newKittens;
}

function destructivelyRemoveFirstKitten(){
  var newKittens = kittens.shift();
  return newKittens;
}

function appendKitten(name){
 var newKittens = [...kittens, name];
 return newKittens;
}

function prependKitten(name){
 var newKittens = [name, ...kittens];
 return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length - 1);
  return  newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return  newKittens;
}