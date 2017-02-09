var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}
function appendKitten(name){
var cats = [...kittens, name];
return cats
}

function prependKitten(name){
  var cats = [name, ...kittens];
  return cats
}

function removeLastKitten(){
  var cats = kittens.slice(0, kittens.length - 1);
  return cats
}

function removeFirstKitten(){
  var cats = kittens.slice(1);
  return cats
}
