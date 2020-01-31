var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(value){
  var arr = kittens.push(value);
  return arr;
}

function destructivelyPrependKitten(cat){
  var arr = kittens.unshift(cat);
  return arr;
}

function destructivelyRemoveLastKitten(){
  var arr = kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var arr = [...kittens, name];
  return arr;
}


function prependKitten(name){
  var arr = [name, ...kittens];
  return arr;
  
}


function removeLastKitten(){
  var arr = kittens.slice(0,kittens.length-1);
  return arr;
}

function removeFirstKitten(){
  var arr = kittens.slice(1, kittens.length);
  return arr;
}