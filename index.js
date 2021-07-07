var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield" ];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens;
 }

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
}

function prependKitten(name){
  var newArray = kittens.slice();
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten(name) {
  var newArray = kittens.slice();
  newArray.pop();
  return newArray
}

function removeFirstKitten(){
  var newArray = kittens.slice();
  newArray.shift();
  return newArray;
}
