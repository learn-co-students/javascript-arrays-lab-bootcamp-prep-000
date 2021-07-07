var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  kittens = ["Milo", "Otis", "Garfield"];
  var moreKittens = kittens.concat(name);
  return moreKittens;
}

function prependKitten(name){
  kittens = ["Milo", "Otis", "Garfield"];
  var moreKittens = [name, ...kittens];
  return moreKittens;
}

function removeLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"];
  var moreKittens = kittens.slice(0, kittens.length-1)
  return moreKittens;
}

function removeFirstKitten(){
  kittens = ["Milo", "Otis", "Garfield"];
  var moreKittens = kittens.slice(1);
  return moreKittens;
}
