// Add your functions and code here

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var newKitten = [name];
  return kittens.concat(newKitten);
}

function prependKitten(name) {
  var newKitten = [name];
  return newKitten.concat(kittens);
}

function removeLastKitten(name) {
  return kittens.slice(0,2);
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}




            
  

