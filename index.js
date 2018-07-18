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
  var tempArray = kittens.concat(name);
  return tempArray;
}

function prependKitten(name){
  var tempArray = [name];
  return tempArray.concat(kittens);
}

function removeLastKitten(){
  var tempArray = kittens.slice(0,kittens.length-1);
  return tempArray;
}

function removeFirstKitten(){
  var tempArray = kittens.slice(1,kittens.length);
  return tempArray;
}

