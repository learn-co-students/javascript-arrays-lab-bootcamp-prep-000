const app = "I don't do much."

var kittens = ["x", "x", "x"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
}

function appendKitten(name){
  var newArray = [...kittens, name]
  return newArray;
}


function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten(name){
  var newArray = kittens.slice(0, kittens.length-1);
  return newArray;
}

function removeFirstKitten(name){
  var newArray = kittens.slice(1);
  return newArray;
}
