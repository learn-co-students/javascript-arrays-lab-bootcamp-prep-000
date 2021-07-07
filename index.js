var kittens = ["Milo", "Otis", "Garfield"]
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var newKitten = kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  var newKitten = kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  var lessKittens = kittens.shift()
  return lessKittens;
}
function appendKitten(name){
  var allKittens = [...kittens,name];
  return allKittens;
}
function prependKitten(name){
  var allKittens = [name, ...kittens];
  return allKittens;
}

function removeLastKitten(){
  var smallerFamily = kittens.slice(0,-1);
  return smallerFamily;
}
function removeFirstKitten(){
  var byeFirst = kittens.slice(1);
  return byeFirst;
}
