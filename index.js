var kittens = [] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  window.kittens.push(name);
}

function destructivelyPrependKitten(name){
  window.kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  window.kittens.shift();
}

function appendKitten(name){
  var newArray = [...window.kittens, name];
  return newArray;
}

function prependKitten(name){
  var newArray = [name, ...window.kittens];
  return newArray;
}

function removeLastKitten(){
  var newArray = window.kittens.slice(0,window.kittens.length-1 );
  return newArray;
}

function removeFirstKitten(){
  var newArray = window.kittens.slice(1,window.kittens.length);
  return newArray;
}
