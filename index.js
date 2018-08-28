// Add your functions and code here

function destructivelyAppendKitten(name){
  window.kittens.push(name);
}

function destructivelyPrependKitten(name){
  window.kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  window.kittens.shift();
}

function appendKitten(name){
  return window.kittens.concat(name);
  
}

function prependKitten(name){
  var nameArr = [name];
  return nameArr.concat(window.kittens);
}

function removeLastKitten(){
  return window.kittens.slice(0,-1);
  
}

function removeFirstKitten(){
  return window.kittens.slice(1);
}