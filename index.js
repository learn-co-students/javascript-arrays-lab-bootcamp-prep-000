const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  //use push
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  //use unshift
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  //use pop
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  //use shift
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var arr1 = [...kittens, name];
  return arr1;
}

function prependKitten(name){
  var arr1 = [name,...kittens];
  return arr1;
}

function removeLastKitten(){
  //use slice
  var arr1 = kittens.slice(0,kittens.length-1);
  return arr1;
}

function removeFirstKitten(){
  //use slice
  var arr1 = kittens.slice(1);
  return arr1;
}
