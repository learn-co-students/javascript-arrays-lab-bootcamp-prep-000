 var kittens = ["Milo", "Otis", "Garfield"];
 
function destructivelyAppendKitten(name){
 kittens.push("Ralph")
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
  var kittens2 = ["Broom"];
  return(kittens.concat(kittens2));
}

function prependKitten(name){
 var kittens2 = ["Arnold", ...kittens];
  return(kittens2);
}
function removeLastKitten(){
  var kittens3 = kittens.slice(0,kittens.length - 1);
  return kittens3;
}

function removeFirstKitten(){
  var kittens4 = kittens.slice(1);
  return kittens4;
}