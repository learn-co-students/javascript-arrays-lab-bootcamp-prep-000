var kittens = [] //define your array here

// Add your functions and code here
var kittens = [];
function destructivelyAppendKitten(name){
  return kittens.push(name);
};

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
};

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
};

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
};

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
};

function prependKitten(name){
  var newArray = kittens.slice();
  newArray.unshift(name);
  return newArray;
};

function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length -1);
  return newArray;
};

function removeFirstKitten(){
  var newArray = kittens.slice(1);
  return newArray;
};
