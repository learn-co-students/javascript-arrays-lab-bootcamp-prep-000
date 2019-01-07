var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
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
  var newKitten = [...kittens, "Broom"];
  return newKitten;
}

function prependKitten(name){
  var newKitten = ["Arnold", ...kittens];
  return newKitten;
}

function removeLastKitten(){
  var newArr = kittens.slice(0, kittens.length - 1);
  return newArr;
}

function removeFirstKitten(){
  var newArr = kittens.slice(1);
  return newArr;
}
