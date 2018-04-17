const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  var newArr = kittens;
  newArr.push(name);
  return newArr;
}

function destructivelyPrependKitten(name){
  var newArr = kittens;
  newArr.unshift(name);
  return newArr;
}


function destructivelyRemoveLastKitten(){
  var newArr = kittens;
  newArr.pop();
  return newArr;
}

function destructivelyRemoveFirstKitten(){
  var newArr = kittens;
  newArr.shift();
  return newArr;
}

function appendKitten(name){
  return [...kittens,name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
