const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}


function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function appendKitten(name){
  var newArray = [...kittens,name];
  return newArray;
}

function prependKitten(name){
  var newArray = [name,...kittens];
  return newArray;
}

function removeLastKitten(){
  var newArray = [...kittens];
  newArray.pop();
  return newArray
}

function removeFirstKitten(){
  var newArray = [...kittens];
  newArray.shift();
  return newArray;
}
