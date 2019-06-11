var kittens = ["Milo", "Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph){
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(Bob){
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

function appendKitten(Broom){
  var moreKittens = [...kittens, "Broom"];
  return moreKittens;
}

function prependKitten(Arnold){
  var moreKittens = ["Arnold",...kittens];
  return moreKittens;
}

function removeLastKitten(){
  var byeKitty = kittens.slice(0,kittens.length -1);
  return byeKitty;
}

function removeFirstKitten(){
  var moreKittens = kittens.slice(1);
  return moreKittens;
}










