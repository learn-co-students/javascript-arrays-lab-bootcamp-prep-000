var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  return [...kittens, "Broom"]
}

function prependKitten(name){
  return ["Arnold", ...kittens,]
}

function removeLastKitten(){
  var kittens1 = kittens.slice(0, kittens.length - 1);
  return kittens1;
}

function removeFirstKitten(){
  var kittens1 = kittens.slice(1, kittens.length);
  return kittens1;
}
