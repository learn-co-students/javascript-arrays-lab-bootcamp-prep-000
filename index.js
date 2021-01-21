var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens, name];
  //var addLast = kittens.concat(name);
  //return addLast;
}

function prependKitten(name){
  return [name, ...kittens];
  //var addFirst = [name, ...kittens];
  //return addFirst;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
  //var lastRemoved = kittens.slice(0, array.length-1);
  //return lastRemoved;
}

function removeFirstKitten() {
  return kittens.slice(1);
  //var firstRemoved = kittens.slice(1);
  //return firstRemoved;
}