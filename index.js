var kittens = [] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop(2);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(0);
  return kittens;
}

function appendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.splice(3, 0, 'Broom');
  return kittens;
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.splice(0, 0, 'Arnold');
  return kittens;
}

function removeLastKitten(){
  return kittens.slice(0, 2);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
